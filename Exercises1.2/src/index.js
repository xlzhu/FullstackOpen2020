import React from 'react'
import ReactDOM from 'react-dom'


const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const App = () => {
  return (    
      <div>
      <Part name="Fundamentals of React" exercises={10}/>
      <Part name="Using props to pass data" exercises={7}/>
      <Part name="State of a component" exercises={14}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))