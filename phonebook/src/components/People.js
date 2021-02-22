import React from 'react'

const People = ({ persons, findName }) => (
 
    (findName.length === 0)
    ? persons.map(names =>  <p key={names.id}>
        {names.name} {names.number}
    </p>)
    : persons.filter(e => e.name === findName)
    .map(names =>  <p key={names.id}>
      {names.name} {names.number}
  </p>)

)

export default People