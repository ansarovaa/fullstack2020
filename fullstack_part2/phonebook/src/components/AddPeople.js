import React from 'react'

const AddPeople = ({addNameNumber, newName, handleNameChange, handleNumberChange, newNumber}) => {
    return <form onSubmit={addNameNumber}>
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

}

export default AddPeople