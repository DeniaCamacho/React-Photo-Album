import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Albums from "./Albums"
import Images from "./Images"

function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Albums} />
        <Route path="/Images/:albumId" component={Images} />
        {/* <Route path = "/SinglePic/" component= {SinglePic}/> */}
      </div>
    </Router>
  )
}

export default App
