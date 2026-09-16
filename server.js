import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendContactEmail } from './server/mailer.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 80;

// Body parser
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Request logging in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Contact Form Submission API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Please enter your name.' });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email format (e.g. name@company.com).' });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Please provide a project description or message.' });
    }

    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    const userAgent = req.headers['user-agent'] || '';

    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? String(phone).trim() : '',
      message: message.trim(),
      userIp: Array.isArray(userIp) ? userIp[0] : userIp,
      userAgent,
    });

    return res.status(200).json({
      success: true,
      message: 'Your project brief has been sent successfully. Our team will get back to you within 24 hours.',
      details: result,
    });
  } catch (err) {
    console.error('❌ Error processing contact form submission:', err);
    return res.status(500).json({
      error: 'We encountered an error dispatching your message. Please try again or email us directly at contact@growthtechsys.com',
    });
  }
});

// Serve compiled static assets in production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath, { maxAge: '1d' }));

// SPA client routing fallback (all unmatched GET requests serve index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start listening
app.listen(PORT, '0.0.0.0', () => {
  console.log(`=================================================`);
  console.log(`🚀 GrowthTechSys Server running on port ${PORT}`);
  console.log(`📧 Nodemailer destination: ${process.env.CONTACT_RECEIVER_EMAIL || 'rahulkumardrop@gmail.com'}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`=================================================`);
});
