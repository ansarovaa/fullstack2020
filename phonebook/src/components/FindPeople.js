import React from 'react'

const FindPeople = ({findName, handleNameFind}) => {
    return <div>
        find name:
        <input value={findName} onChange={handleNameFind}/>
    </div>
}

export default FindPeople