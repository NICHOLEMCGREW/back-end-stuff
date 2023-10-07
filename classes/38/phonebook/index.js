const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('api/info', (req, res) => {
    Person.find({}).then(persons => {
        res.send(`Phonebook has info for ${persons.length} people <br /> ${Date()}`)
    })
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})



const generateCount = () => {
    const maxCount = persons.length > 0
      ? Math.max(...persons.map(n => n.count))
      : 0
    return maxCount + 1
  }

app.post('/info', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const person = {
        content: body.content,
        count: `Phonebook has info for ${generateCount()}`,
        date: new Date()
    }

    persons = persons.concat(person)

    response.json(person)
})


// app.get('/info', (req, res) => {
//     res.json(person)
// })



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})