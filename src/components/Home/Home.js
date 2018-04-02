import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './home.css'

class Home extends Component{

render(){
return(
<div className="homeMain" >
<Link to="/todolist" className="homeRoutingButtons" style={{textDecoration: "none", color: "blue"}}>
To Do List
    </Link>
<Link to="/grocerylist" className="homeRoutingButtons" style={{textDecoration: "none", color: "blue"}}>
Grocery List
    </Link>
</div>
)
}
}
export default Home