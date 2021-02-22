import React, {useState} from 'react'

const App = () => {
    const [persons,
        setPersons] = useState([
        {
            name: 'Arto Hellas',
            id: 1,
            number: '27-32-2'
        }
    ]) //initial state of names in phone book
    const [newName,
        setNewName] = useState('')
    const [newNumber,
        setNewNumber] = useState('')

    const addNameNumber = (event) => { //function to add new name into phonebook
        event.preventDefault()
        const newObject = {
            name: newName,
            id: persons.length + 1,
            number: newNumber
        }
        const checkName = persons.find(person => person.name === newName)

        const checkNames = (checkName == undefined)
            ? setPersons(persons.concat(newObject))
            : alert(`${newName} is already added to phonebook`)

        setNewName('')
        setNewNumber('')

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
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
            {persons.map(names => <p key={names.id}>
                {names.name} {names.number}
            </p>)}

        </div>
    )
}

export default App