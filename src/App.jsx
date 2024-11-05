import './App.css'
import PerScholasLogo from './components/PerScholasLogo.jsx'
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import IsEven from './components/CondRendering.jsx';
import Modal from './components/Modal.jsx';
import Greeting from './components/Greeting.jsx';
import { useState } from 'react'


function App() {
  const element = <h1>Hello, world!</h1>
  
  // Can defined styles like this as well!
  // cont styles = {
  //   color: "skyblue", 
  //   border: "1px solid white", 
  //   borderRadius: "15px" 
  // }

  const listItems = [
    <li>Walk the dog</li>,
    <li>Go to gym</li>,
    <li>Vote</li>,
  ]

  const name = "John Doe"
  function sayHello () {
    return `${name} says "Hi!"`
  }

  const [pressCount, setPressCount] = useState(0)

  return (
    <>
      <PerScholasLogo />
      <PerScholasLogo />
      <PerScholasLogo />
      <br />

      <button className='btn' onClick={() => setPressCount(pressCount + 1)}>Click Me!</button>
      {
        pressCount > 5 ?
          <p style={{color: "red", textDecoration: "underline"}}>Stop Presssing me!</p>
        :
        ""
      }

      <h1 
      className="title" 
      style={{
        color: "skyblue", 
        border: "1px solid white", 
        borderRadius: "15px" 
      }} >Learning React</h1>

      {element}

      <h3>Todo List</h3>
      <ul>{listItems}</ul>

      <p>{sayHello()}</p>

      <hr />
      {/* Exercise: Lets create a small webpage below! This webpage will have a Header, MainContent, and Footer components */}
      <div id="webpage">
        <Header />
        <MainContent />
        <Footer />
      </div>

      <hr />
      <IsEven />

      <hr />
      <Modal visible={false} />

      <Greeting name="Josh" />
    </>
  )
}

export default App