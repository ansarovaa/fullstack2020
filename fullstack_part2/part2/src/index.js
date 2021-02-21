import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))