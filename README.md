# Desafio Fundamento do NodeJs |

![GitHub repo size](https://img.shields.io/github/repo-size/Du-devBR/desafio-nodeJs-stream-csv)
![GitHub language count](https://img.shields.io/github/languages/count/Du-devBR/desafio-nodeJs-stream-csv)
![GitHub forks](https://img.shields.io/github/forks/Du-devBR/desafio-nodeJs-stream-csv)

> Projeto academico de uma Api com crud para importação de um arquivo CSV via streams do curso de NodeJs do Ignite [Rocketseat](http://app.ropcketseat.com.br).

## Detalhes do aplicativo

- Nesse desafio você desenvolverá uma API para realizar o CRUD de suas tasks (tarefas).

## 🚀 Funcionalidades

- Criação de uma task.
- Listagem de todas as tasks
- Atualização de uma task pelo `id`
- Remover uma task pelo `id`
- Marcar pelo `id` uma task como completa
- E o verdadeiro desafio: Importação de tasks em massa por um arquivo CSV

## Rotas e regras de negócio

Antes das rotas, vamos entender qual a estrutura (propriedades) que uma task deve ter:

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
- `created_at` - Data de quando a task foi criada.
- `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

Rotas:

- `POST - /tasks`
  Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
  Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.

- `GET - /tasks`
  Deve ser possível listar todas as tasks salvas no banco de dados.
  Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`

- `PUT - /tasks/:id`
  Deve ser possível atualizar uma task pelo `id`.
  No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
  Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
  Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

- `DELETE - /tasks/:id`
  Deve ser possível remover uma task pelo `id`.
  Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

- `PATCH - /tasks/:id/complete`
  Deve ser possível marcar a task como completa ou não. Isso significa que se a task estiver concluída, deve voltar ao seu estado “normal”.
  Antes da alteração, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

## 💻 Como usar o projeto

Para rodar o projeto precisará realizar os procedimentos abaixo

1 clone o projeto

```
git clone https://github.com/Du-devBR/desafio-nodeJs-stream-csv.git
```

2 Terminal

```
cd .\desafio-nodeJs-stream-csv
```

3 Instale as dependências necessárias com o comando

```
npm install
```

4 Rode o servidor da api

```
npm run dev
```

5 Use uma ferramenta de testes de api ou integre a um projeto frontend

6 Importe a Collection Api Task [Collection](./Insomnia_tasksTest.json)

### Crie tarefas atraves da rota `POST`

```
http://localhost:3333/tasks
```

Body da requisição

```
{
	"title": "tarefa01",
	"description": "Descrição da tarefa 01"
}
```

### Busque todas as tarefas atraves da rota `GET`

```
http://localhost:3333/tasks
```

### Pesquise por nome da tarefa ou texto atraves do `search` atraves da rota `GET`

```
http://localhost:3333/tasks
```

Adiciobe a query `search` e escreva o parametro de pesquisa, exemplo:

```
http://localhost:3333/tasks?search=tarefa01
```

### Atualize uma tarefa pelo `id` atraves da rota `PUT`

```
http://localhost:3333/tasks/*subtituaPeloID*

```

Body da requisição

```
{
	"title": "Task 01",
	"description": "Mofificado tarefa 01"
}
```

### Complete uma tarefa pelo `id` atraves da rota `PATCH`

```
http://localhost:3333/tasks/*subtituaPeloID*/complete

```

Altera a query `status` para o valor de:

```
true
```

ou

```
false
```

### Delete uma tarefa pelo `id` atraves da rota `DELETE`

```
http://localhost:3333/tasks/*subtituaPeloID*
```

## 🌐 Links úteis

[NodeJs](https://nodejs.org/en)
[Csv parse](https://csv.js.org/)

## Eduardo Ananias da Silva

[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/eduardo-ananias-29a53048/)
[<img src=" https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/Du-devBR)
