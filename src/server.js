import http from 'node:http'
import { routes } from './routes.js';
import { json } from './middlewares/json.js';

const server = http.createServer(async (req, res) => {

  const { url, method } = req;

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path === url;
  })

  console.log(route);

  if (route) {
    return route.handler(req, res)
  }


  return res.end("Servidor online")
})

server.listen(3333)