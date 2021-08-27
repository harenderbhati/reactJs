import React from "react";
import{BrowserRouter as Router,Route,Link,Switch,} from 'react-router-dom'
import about from "./components/about";
import contact from "./components/contact";
import gallery from "./components/gallery";
import home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
              <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
              <Link to="/about">About Us</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/gallery">Gallery</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/contact">Contact us </Link>&nbsp;&nbsp;&nbsp;
        </nav>
        <section>
          <Switch>
            <Route path="/" exact component={home}/>
            <Route path="/about" exact component={about}/>
            <Route path="/gallery" exact component={gallery}/>
            <Route path="/contact" exact component={contact}/>
          </Switch>
        
        </section>
      </Router>
     
    </div>
    
  );
}

export default App;
