import http from 'node:http'
import { routes } from './routes.js';
import { json } from './middlewares/json.js';
import { extractQueryParams } from './util/extract-route-path.js';

const server = http.createServer(async (req, res) => {

  const { url, method } = req;

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url);
  })

  if (route) {
    const routeParams = req.url.match(route.path)
    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }


  return res.end("Servidor online")
})

server.listen(3333)
