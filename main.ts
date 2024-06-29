import { Hono  } from 'hono'
import { serveStatic } from 'hono/deno'
// import { cors } from 'hono/cors'

const app = new Hono()

// app.use(
//   '/api/*',
//   cors({
//     origin: 'http://localhost:5173'
//   })
// )

app.get('/api/random_name', (c) => {
  const num = Math.floor(Math.random() *3);
  let name;
  switch (num) {
    case 0:
      name = "Alice"
      break
    case 1:
      name = "Bob"
      break
    default:
      name = "Eve"
      break
  }
  return c.json({"name": name})
})

app.use('/*', serveStatic({ root: './frontend-app/dist/' }))

Deno.serve(app.fetch)
