import React from 'react'

const Course = ({ courses }) => {
  
  return (
    
    <div>
      <h1>Web-development</h1>
        {courses.map(course => 
          <div key={course.id}>
            <h1>{course.name}</h1>
              <ul>
                {course.parts.map(part => 
                  <li key={part.id}>
                    {part.name} {part.exercises}
                  </li>
                )}
              </ul>
      <p>Total {course.parts.reduce((sum, order) => sum + order.exercises,0)}</p>
           </div>)}
    </div>
    
  )
  
}

export default Course