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
      message: 'Thanks for submit team will connect in shorty.',
      details: result,
    });
  } catch (err) {
    console.error('❌ Error processing contact form submission:', err);
    return res.status(500).json({
      error: 'We encountered an error dispatching your message. Please try again or email us directly at contact@growthtechsys.com',
    });
  }
});

// Serve compiled static assets in production with granular caching headers
const distPath = path.join(__dirname, 'dist');
app.use(
  express.static(distPath, {
    setHeaders: (res, filePath) => {
      // Hashed Vite assets can be cached aggressively (1 year, immutable)
      if (filePath.includes(path.sep + 'assets' + path.sep)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (/\.(png|jpe?g|webp|svg|ico|gif)$/i.test(filePath)) {
        // Image assets: 7 days with stale-while-revalidate
        res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
      } else if (/\.(xml|txt)$/i.test(filePath)) {
        // Sitemap, robots.txt, llms.txt: 1 hour
        res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
      } else if (filePath.endsWith('.html')) {
        // HTML files: never cache aggressively to ensure instant SPA updates
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      }
    },
  })
);

// SPA client routing fallback (all unmatched GET requests serve index.html)
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
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
