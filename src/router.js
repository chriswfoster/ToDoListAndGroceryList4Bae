import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home.js'
import GroceryList from './components/GroceryList/GroceryList'
import ToDoList from './components/ToDoList/ToDoList'

export default(
 
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/todolist" component ={ToDoList} />
    <Route path="/grocerylist" component ={GroceryList} />

    
    
        </Switch>

    )