import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Log para debug en Vercel
    console.log("Variables de entorno disponibles:", {
      EMAIL_USER: process.env.EMAIL_USER ? "✓" : "✗",
      EMAIL_PASS: process.env.EMAIL_PASS ? "✓" : "✗",
      EMAIL_TO: process.env.EMAIL_TO ? "✓" : "✗",
    });

    const body = await request.json();
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ error: "Faltan datos requeridos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Verificar variables de entorno
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      console.error("Variables de entorno faltantes");
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incompleta" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Email inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Configuración mejorada para Vercel
    const transporter = nodemailer.createTransporter({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verificar conexión
    await transporter.verify();
    console.log("Conexión SMTP verificada correctamente");

    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>De:</strong> ${nombre} (${email})</p>
            <p><strong>Asunto:</strong> Consulta desde portafolio web</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #4F46E5;">
              ${mensaje.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
    };

    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Mensaje recibido - Erwin Martinez",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            ¡Gracias por contactarme, ${nombre}!
          </h2>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hola <strong>${nombre}</strong>,</p>
            <p>He recibido tu mensaje y me pondré en contacto contigo lo antes posible.</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Resumen de tu mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #10b981;">
              ${mensaje.replace(/\n/g, "<br>")}
            </div>
          </div>

          <p style="color: #666; text-align: center;">
            Saludos,<br>
            <strong>Erwin Martinez</strong><br>
            <span style="color: #4F46E5;">Desarrollador Web Fullstack</span>
          </p>
        </div>
      `,
    };

    // Enviar emails con mejor manejo de errores
    console.log("Enviando email principal...");
    await transporter.sendMail(mailOptionsToYou);

    console.log("Enviando email de confirmación...");
    await transporter.sendMail(mailOptionsToUser);

    console.log("Emails enviados correctamente:", { nombre, email });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error detallado:", {
      message: error.message,
      code: error.code,
      stack: error.stack,
    });

    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
