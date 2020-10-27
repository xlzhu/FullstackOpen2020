/*
import React from 'react';
import ReactDOM from 'react-dom';
*/
/* import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
/* 最初版本
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)
*/
/* 第二版
const App = () => {
  console.log('Hello from compenent.')
  return (
    <div>
      <p>Hello world from me</p>
    </div>
  )
}
*/
/* 第三版
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
*/
/* 第四版
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </>
  )
}
*/
/*
const Header = (props) => {
  return (
  <div><h1>{props.course}</h1></div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
      {props.part} {props.exercises}
    </p>
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
    <Part part={props.part1} exercises={props.exercises1}></Part>
    <Part part={props.part2} exercises={props.exercises2}></Part>
    <Part part={props.part3} exercises={props.exercises3}></Part>
  </div>
  )
}
const Total = (props) => {
  return (
  <div><p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p></div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}> 
      </Content>
      <Total  exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total>
    </div>
  )
}

//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
  React.createElement(App,null),
  document.getElementById('root')
)
*/
/* 1.5*/
/*
const Header = (props) => {
  return (
  <div><h1>{props.coursename}</h1></div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
      {props.part.name} {props.part.exercises}
    </p>
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
    <Part part={props.parts[0]}></Part>
    <Part part={props.parts[1]}></Part>
    <Part part={props.parts[2]}></Part>
  </div>
  )
}
const Total = (props) => {
  return (
  //<div><p> 33 </p></div>
  <div><p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p></div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root')) 
*/
/* 组建状态，事件处理 1.4.1
import React,{useState} from 'react'
import ReactDom from 'react-dom'

const Hello = ({name,age}) => {
  //const { name,age } = props
  const bornYear = () => new Date().getFullYear() - age
  //const bornYear = () => {
  //  const yearNow = new Date().getFullYear()
  //  return yearNow - props.age
  //}
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
  <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
const App = () => {
  const name = 'Felix'
  const age = 13

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={14+10} />
      <Hello name={name} age={age} />
    </div>
  )
}
ReactDom.render(
  <App/>,
  document.getElementById('root')
)*/
/* Stateful component 1.4.2 
import React,{useState} from 'react'
import ReactDom from 'react-dom'

const App = () => {
  const [counter,setCounter] = useState(0)

  //setTimeout(
  //  () => setCounter(counter +1),
  //  1000
  //)

  return (
  <div>
    <div>{counter}</div>
    <button onClick={() => setCounter(counter + 1)}>plus</button>
    <button onClick={() => setCounter(0)}>zero</button>
  </div>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
)*/
/* Complex state */
import React,{useState} from 'react'
import ReactDom from 'react-dom'

const App = (props) => {
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)

  return(
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    </div>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
)