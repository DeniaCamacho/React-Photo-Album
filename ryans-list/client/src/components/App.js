import React from "react"
import { useUsers } from "../hooks"
import Main from "./main"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../styles/style.css"

function App() {
  const {
    users,
    sub,
    subOne,
    subTwo,
    subThree,
    subFour,
    subFive,
    subSix,
    subSeven
  } = useUsers()

  console.log(users)

  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  )
}

export default App
