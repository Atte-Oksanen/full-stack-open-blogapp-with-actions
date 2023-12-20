const mongoose = require('mongoose')

const setPerson = (Model) => {
    const person = new Model({
        name: process.argv[3],
        number: process.argv[4],
    })

    person.save().then(() => {
        console.log("person saved")
        mongoose.connection.close()
    })
}

const getPersons = (Model) => {
    Model.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://fullstack:${password}@cluster0.rjlbxcw.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)
mongoose.connect(url)
const Person = mongoose.model('Person', new mongoose.Schema({
    name: String,
    number: String,
}))

if (process.argv.length === 3) {
    getPersons(Person)
}

if (process.argv.length === 5) {
    setPerson(Person)
}