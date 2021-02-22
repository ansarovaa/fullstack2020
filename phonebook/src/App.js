import React, {useState} from 'react'

const App = () => {
    const [persons,
        setPersons] = useState([
        {
            name: 'Arto Hellas',
            id: 1
        }
    ]) //initial state of names in phone book
    const [newName,
        setNewName] = useState('')

    const addName = (event) => { //function to add new name into phonebook
        event.preventDefault()
        const newObject = {
            name: newName,
            id: persons.length + 1
        }
    const checkName = persons.find(person => person.name === newName)

    const checkNames = (checkName == undefined)
    ? setPersons(persons.concat(newObject)) 
    : alert(`${newName} is already added to phonebook`)
    
    setNewName('')

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name:
                    <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(names => <p key={names.id}>
                {names.name}
            </p>)}

        </div>
    )
}

export default App