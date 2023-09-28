import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './util/build-route-path.js'
const database = new Database()
export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body
      const task = {
        id: randomUUID(),
        title,
        description,
        created_at: new Date(),
        updated_at: new Date(),
        completed_at: null,
      }
      database.insert('tasks', task)
      return res.end("Criação de tarefa")
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query
      const tasks = database.select('tasks', search ? {
        title: search,
        description: search,
      } : null)
      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      const selectTask = database.select('tasks', { id })[0]

      if (selectTask) {
        database.update('tasks', id, {
          title: title || selectTask.title,
          description: description || selectTask.description,
          created_at: selectTask.created_at,
          updated_at: new Date(),
          completed_at: null
        })
        return res.writeHead(204).end('Editada com sucesso ')
      }
      return res.writeHead(404).end("Tarefa não encontrada")

    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params

      const selectTask = database.select('tasks', { id })[0]

      if (selectTask) {
        database.delete('tasks', id)
        return res.writeHead(204).end('Excluido com sucesso ')
      }
      return res.writeHead(404).end('Falha ao excluir ')
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params
      const { status } = req.query

      const selectTask = database.select('tasks', { id })[0]

      if (selectTask) {
        database.update('tasks', id, {
          title: selectTask.title,
          description: selectTask.description,
          created_at: selectTask.created_at,
          updated_at: new Date(),
          completed_at: status === 'true' ? new Date() : status === 'false' ? null : null
        })
        return res.writeHead(204).end("Editada com sucesso")
      }
      return res.writeHead(404).end("Tarefa não encontrada")

    }
  },
]
