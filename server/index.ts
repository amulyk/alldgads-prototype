import express from 'express';
import next from 'next';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  // handle nextjs routing
  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`🚀 Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
