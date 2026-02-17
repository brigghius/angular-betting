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

// 🔹 GET tutti gli eventi
router.get('/events', (ctx) => {
  const rawData = fs.readFileSync(dataPath);
  const events = JSON.parse(rawData);
  ctx.body = events;
});

// 🔹 GET evento per id
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

// 🔹 GET eventi con filtro per sport
router.get('/events', (ctx) => {
  const rawData =  fs.readFile(dataPath);
  let events = JSON.parse(rawData);

  const { sport } = ctx.query;
  console.log(sport);
  events = events.filter(
      e => e.sport.toLowerCase() === sport.toLowerCase()
    );
  
  ctx.body = events;
}); 


app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock server Koa avviato su http://localhost:${PORT}`);
});