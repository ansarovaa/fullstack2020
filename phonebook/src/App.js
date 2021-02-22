import React, {useState} from 'react'

const App = () => {
    const [persons,
        setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-123456',
            id: 1
        }, {
            name: 'Ada Lovelace',
            number: '39-44-5323523',
            id: 2
        }, {
            name: 'Dan Abramov',
            number: '12-43-234345',
            id: 3
        }, {
            name: 'Mary Poppendieck',
            number: '39-23-6423122',
            id: 4
        }
    ]) //initial state of names in phone book
    const [newName,
        setNewName] = useState('')
    const [newNumber,
        setNewNumber] = useState('')
    const [findName,
        findNameInList] = useState('')

    const addNameNumber = (event) => { //function to add new name into phonebook
        event.preventDefault()
        const newObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        const checkName = persons.find(person => person.name === newName)

        const checkNames = (checkName == undefined)
            ? setPersons(persons.concat(newObject))
            : alert(`${newName} is already added to phonebook`)

        setNewName('')
        setNewNumber('')
        findNameInList('')

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNameFind = (event) => {
        findNameInList(event.target.value)
    }

    const showName = (findName.length === 0)
    ? persons.map(names =>  <p key={names.id}>
        {names.name} {names.number}
    </p>)
    : persons.filter(e => e.name === findName)
    .map(names =>  <p key={names.id}>
      {names.name} {names.number}
  </p>)

    return (
        <div>
            <h1>Phonebook</h1>
            <div>
                find name:
                <input value={findName} onChange={handleNameFind}/>
            </div>
            <h2>Add a new</h2>
            <form onSubmit={addNameNumber}>
                <div>
                    name:
                    <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>number:
                    <input value={newNumber} onChange={handleNumberChange}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {showName}
        </div>
    )
}

export default App