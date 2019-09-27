import React from "react"
import Registration from "./Components/Registration";
import HomePage from "./Components/Homepage"
import {BrowserRouter as Router,Route} from "react-router-dom";
  
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/Registration" component={Registration} />
        
      </div>
    </Router>
    
  );
}
export default App ;