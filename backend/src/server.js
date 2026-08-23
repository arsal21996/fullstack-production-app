import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 4000);
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.disable('x-powered-by');
app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'production-api', time: new Date().toISOString() });
});

app.get('/api', (_req, res) => {
  res.json({ message: 'Production API is running.' });
});

app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(port, () => console.log(`API listening on ${port}`));
