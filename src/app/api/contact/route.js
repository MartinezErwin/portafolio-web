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
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Email inválido" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              💡 <strong>Tip:</strong> Puedes responder directamente a este email para contactar a ${nombre}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Este mensaje fue enviado desde tu formulario de contacto del portafolio web.
          </p>
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
            <p>He recibido tu mensaje y me pondré en contacto contigo lo antes posible, generalmente respondo en un plazo de 24-48 horas.</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Resumen de tu mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #10b981;">
              ${mensaje.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666;">Mientras tanto, puedes revisar mi trabajo en:</p>
            <div style="margin: 15px 0;">
              <a href="https://github.com/ErwinPlaza064" style="display: inline-block; margin: 0 10px; color: #4F46E5; text-decoration: none;">
                🔗 GitHub
              </a>
              <a href="https://linkedin.com/in/tu-perfil" style="display: inline-block; margin: 0 10px; color: #4F46E5; text-decoration: none;">
                🔗 LinkedIn
              </a>
            </div>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #666; text-align: center;">
            Saludos,<br>
            <strong>Erwin Martinez</strong><br>
            <span style="color: #4F46E5;">Desarrollador Web Fullstack</span><br>
            📧 plazaerwin41@gmail.com<br>
            📱 +52 464 112 3632
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToUser);

    console.log("Emails enviados correctamente:", { nombre, email });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error al enviar email:", error);

    return new Response(
      JSON.stringify({
        error: "Error interno del servidor al enviar el mensaje",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
