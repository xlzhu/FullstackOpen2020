import React from 'react';
import ReactDOM from 'react-dom';
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

