import React from 'react'

const People = ({persons, findName, deletePersonFrom}) => ((findName.length === 0)
    ? persons.map(names => <p key={names.id}>
        {names.name}
        {names.number}
        <button onClick={(event) => deletePersonFrom(names.id)}>delete</button>
    </p>)
    : persons.filter(e => e.name === findName).map(names => <p key={names.id}>
        {names.name}
        {names.number}
        <button onClick={(event) => deletePersonFrom(names.id)}>delete</button>
    </p>))

export default People