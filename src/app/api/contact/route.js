import nodemailer from "nodemailer";

export async function POST(request) {
  try {
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

    // Configuración específica para Gmail en Vercel
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5,
    });

    // Verificar conexión
    await transporter.verify();

    const mailOptionsToYou = {
      from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🔔 Nuevo mensaje de contacto de ${nombre}`,
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
          <p style="color: #666; font-size: 12px;">
            Enviado desde el formulario de contacto del portafolio web
          </p>
        </div>
      `,
    };

    const mailOptionsToUser = {
      from: `"Erwin Martinez - Desarrollador" <${process.env.EMAIL_USER}>`,
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
            <p>Generalmente respondo en un plazo de 24-48 horas.</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Resumen de tu mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #10b981;">
              ${mensaje.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666;">Mientras tanto, puedes revisar mi trabajo:</p>
            <a href="https://github.com/ErwinPlaza064" style="color: #4F46E5; text-decoration: none;">
              🔗 GitHub: ErwinPlaza064
            </a>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #666; text-align: center;">
            Saludos,<br>
            <strong>Erwin Martinez</strong><br>
            <span style="color: #4F46E5;">Desarrollador Web Fullstack</span><br>
            📧 plazaerwin41@gmail.com | 📱 +52 464 112 3632
          </p>
        </div>
      `,
    };

    // Enviar emails
    const result1 = await transporter.sendMail(mailOptionsToYou);
    const result2 = await transporter.sendMail(mailOptionsToUser);

    // Cerrar el transporter
    transporter.close();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
        messageIds: [result1.messageId, result2.messageId],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        message: error.message,
        code: error.code || "UNKNOWN_ERROR",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
