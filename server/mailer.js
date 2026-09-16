import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || 'rahulkumardrop@gmail.com';

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Creates and configures the Nodemailer transporter.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE !== 'false' && (port === 465 || process.env.SMTP_SECURE === 'true');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  // Fallback / logging transporter if credentials aren't yet in .env
  return null;
}

/**
 * Sends contact form inquiry email to rahulkumardrop@gmail.com
 */
export async function sendContactEmail({ name, email, phone, message, userIp = '', userAgent = '' }) {
  const cleanName = escapeHtml(name);
  const cleanEmail = escapeHtml(email);
  const cleanPhone = escapeHtml(phone || 'Not provided');
  const cleanMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  const istDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const subject = `🚀 New Lead: ${name} via GrowthTechSys Contact Form`;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF9F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1A1A1A;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FAF9F6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:600px;background-color:#FFFFFF;border-radius:12px;border:1px solid #EAE8E3;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.04);" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color:#1A1A1A;padding:28px 32px;text-align:left;">
              <span style="display:inline-block;background-color:#C84826;color:#FFFFFF;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:4px 10px;border-radius:4px;margin-bottom:12px;">
                New Website Inquiry
              </span>
              <h1 style="margin:0;color:#FFFFFF;font-size:22px;font-weight:600;letter-spacing:-0.02em;">
                GrowthTechSys Lead Desk
              </h1>
            </td>
          </tr>

          <!-- Core Details Section -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 24px 0;font-size:15px;line-height:1.5;color:#4A4844;">
                A new project brief was submitted via the contact form on <a href="https://growthtechsys.com/contact" style="color:#C84826;text-decoration:none;font-weight:600;">growthtechsys.com</a>.
              </p>

              <!-- Info Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:28px;border-collapse:collapse;">
                <tr style="border-bottom:1px solid #F0EEEA;">
                  <td style="padding:10px 0;font-size:13px;color:#8E8B85;font-weight:600;width:120px;text-transform:uppercase;letter-spacing:0.05em;">Client Name</td>
                  <td style="padding:10px 0;font-size:15px;color:#1A1A1A;font-weight:600;">${cleanName}</td>
                </tr>
                <tr style="border-bottom:1px solid #F0EEEA;">
                  <td style="padding:10px 0;font-size:13px;color:#8E8B85;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Email</td>
                  <td style="padding:10px 0;font-size:15px;color:#C84826;font-weight:500;">
                    <a href="mailto:${cleanEmail}" style="color:#C84826;text-decoration:none;font-weight:600;">${cleanEmail}</a>
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #F0EEEA;">
                  <td style="padding:10px 0;font-size:13px;color:#8E8B85;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Phone</td>
                  <td style="padding:10px 0;font-size:15px;color:#1A1A1A;">
                    ${phone ? `<a href="tel:${cleanPhone}" style="color:#1A1A1A;text-decoration:none;">${cleanPhone}</a>` : 'Not provided'}
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;font-size:13px;color:#8E8B85;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Submitted At</td>
                  <td style="padding:10px 0;font-size:13px;color:#66645F;">${istDate}</td>
                </tr>
              </table>

              <!-- Project Brief / Message -->
              <div style="background-color:#FAF9F6;border-left:3px solid #C84826;border-radius:6px;padding:18px 20px;margin-bottom:28px;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8E8B85;margin-bottom:8px;">
                  Project Requirements &amp; Message
                </div>
                <div style="font-size:15px;line-height:1.6;color:#1A1A1A;word-break:break-word;">
                  ${cleanMessage}
                </div>
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="border-radius:24px;background-color:#C84826;">
                    <a href="mailto:${cleanEmail}?subject=Re:%20Inquiry%20with%20GrowthTechSys" target="_blank" style="display:inline-block;padding:12px 26px;font-size:14px;font-weight:600;color:#FFFFFF;text-decoration:none;border-radius:24px;">
                      Reply to ${cleanName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F5F4F0;padding:20px 32px;font-size:12px;color:#8E8B85;text-align:center;border-top:1px solid #EAE8E3;">
              Delivered automatically to <strong>${RECEIVER_EMAIL}</strong> via GrowthTechSys Nodemailer Engine.<br/>
              ${userIp ? `Client IP: ${escapeHtml(userIp)}` : ''}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const textContent = `
New Website Inquiry - GrowthTechSys Lead Desk
=============================================
Client Name:  ${name}
Email:        ${email}
Phone:        ${phone || 'Not provided'}
Submitted:    ${istDate}

Message:
${message}

---------------------------------------------
Sent to: ${RECEIVER_EMAIL}
  `.trim();

  const transporter = createTransporter();

  if (!transporter) {
    // Development or credentials pending
    console.warn(`\n⚠️  [Nodemailer Notice]: SMTP credentials not yet provided in .env (SMTP_USER / SMTP_PASS).`);
    console.log(`📩 Simulated email delivery to: ${RECEIVER_EMAIL}`);
    console.log(`👤 Client: ${name} (${email}, ${phone || 'N/A'})`);
    console.log(`📝 Message preview: "${message.slice(0, 100)}..."\n`);

    return {
      success: true,
      simulated: true,
      message: 'Inquiry received. Configure SMTP credentials in .env to dispatch live emails.',
      recipient: RECEIVER_EMAIL,
    };
  }

  const mailOptions = {
    from: `"${cleanName} via GrowthTechSys" <${process.env.SMTP_USER}>`,
    to: RECEIVER_EMAIL,
    replyTo: email,
    subject,
    text: textContent,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`✅ [Nodemailer] Email successfully sent to ${RECEIVER_EMAIL}! MessageId: ${info.messageId}`);

  return {
    success: true,
    messageId: info.messageId,
    recipient: RECEIVER_EMAIL,
  };
}
