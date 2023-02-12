const Header = (props) => {
  return (
    <div>
      <h1>
       {props.course}
      </h1>
    </div>
  )
}

const Content = ({part1,part2,part3}) => {
  return (
    <div>
      <Part part1={part1}/>
      <Part part2/>
      <Part part3/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
      Number of exercises {props.amount}
      </p>
    </div>
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
      <Header course={course}/>
      <Content part={part1} exercises={exercises1} />
      <Total amount={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}




export default App