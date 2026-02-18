const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const fs = require('fs');
const path = require('path')

const app = new Koa();
const router = new Router({ prefix: '/api' });

const dataPath = path.join(__dirname, 'data', 'events.json');

app.use(cors());
app.use(bodyParser());

// Route esempio
router.get('/test', ctx => {
  ctx.body = { message: 'Connessione Koa ok' };
});

// GET tutti gli eventi (con filtro opzionale per sport)
router.get('/events', (ctx) => {
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const events = JSON.parse(rawData);

  const sport = ctx.query && ctx.query.sport;
  const categoria = ctx.query && ctx.query.categoria;
  if (!sport && !categoria) {
    ctx.body = events;
    return;
  }
  else if (sport) {
    const sportLower = String(sport).toLowerCase();
    const filtered = events.filter(e => e.sport && e.sport.toLowerCase() === sportLower);
    ctx.body = filtered;
  }
  else {
    const categoriaLower = String(categoria).toLowerCase();
    const filtered = events.filter(e => e.categoria && e.categoria.toLowerCase() === categoriaLower);
    ctx.body = filtered;
  }

});

// GET evento per id
router.get('/events/:id', (ctx) => {
  const rawData = fs.readFileSync(dataPath);
  const events = JSON.parse(rawData);

  const event = events.find(e => e.id === parseInt(ctx.params.id));

  if (!event) {
    ctx.status = 404;
    ctx.body = { message: 'Evento non trovato' };
    return;
  }

  ctx.body = event;
});



// Get per ottenere sport e categorie
router.get('/sports', async (ctx) => {
  const rawData = await fs.promises.readFile(dataPath, 'utf-8');
  const events = JSON.parse(rawData);
  const sportMap = {};

  events.forEach(event => {
    if (!sportMap[event.sport]) {
      sportMap[event.sport] = new Set();
    }
    sportMap[event.sport].add(event.categoria);
  });

  const result = Object.keys(sportMap).map(sport => ({
    nomeSport: sport,
    categoria: Array.from(sportMap[sport])
  }));

  ctx.body = result;
});


app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock server Koa avviato su http://localhost:${PORT}`);
});