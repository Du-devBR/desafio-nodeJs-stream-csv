import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
const database = new Database()
export const routes = [
  {
    method: 'POST',
    path: ('/tasks'),
    handler: (req, res) => {
      const task = {
        id: randomUUID(),
        title: 'Teste',
        description: "Lorem ipson",
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
    path: ('/tasks'),
    handler: (req, res) => {
      return res.end(JSON.stringify(req))
    }
  }
]
