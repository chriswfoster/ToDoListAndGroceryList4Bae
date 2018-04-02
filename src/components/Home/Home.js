import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import axios from 'axios'

import GroceryList from './GroceryList/GroceryList'
import ToDoList from './ToDoList/ToDoList'

import {Route, Switch} from 'react-router-dom';

class Home extends Component{
    constructor(){
        super()
        this.state= {

        }
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleWipeList = this.handleWipeList.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleText = this.handleText.bind(this)
    }


    componentDidMount(){
        axios.get('/api/getItems')
        .then(response => this.setState({arrayOfItems: response.data}))
    }

    handleSubmit(item, type){
        axios.post('/api/additem?item='+item+',type='+type)
        .then(response => this.setState({arrayOfItems: response.data}))
        .catch(err => console.log(err))
    }
    handleText(val){
        this.setState({inputText: val})
    }
    handleWipeList(val){
        axios.delete('/api/wipelist')
        .then (response => this.setState({arrayOfItems: response.data}))
        .catch(err => console.log(err))
    }
    handleItemDelete(item){
        axios.delete('/api/deleteitem?item='+item)
    }

render(){

    //// I'm passing props with 2 different methods, what is wrong with me...

    const RouteWithProps = ({ path, exact, strict, component:Component, location, ...rest }) => (
        <Route
          path={path}
          exact={exact}   
            strict={strict}
          location={location}
          render={(props) => <Component {...props} {...rest} />}
      />)
 
     
return(
<div className="homeMain" >
 <Link to="/todolist" className="homeRoutingButtons" style={{textDecoration: "none", color: "blue"}}>
To Do List
    </Link>
<Link to="/grocerylist" className="homeRoutingButtons" style={{textDecoration: "none", color: "blue"}}>
Grocery List
    </Link>
    <Switch>
    <Route path="/grocerylist" render={()=><GroceryList num="2" someProp={100}/>} />
    <RouteWithProps component={ToDoList} foo= "test" />
    </Switch>

</div>
)
}
}
export default Home