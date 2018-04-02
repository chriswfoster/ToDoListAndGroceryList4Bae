import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./home.css"
import axios from "axios"

import GroceryList from "./GroceryList/GroceryList"
import ToDoList from "./ToDoList/ToDoList"

import { Route, Switch } from "react-router-dom"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfItems: [],
      grocerylisttext: "",
      todolisttext: ""
    }
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleWipeList = this.handleWipeList.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  componentDidMount() {
    axios
      .get("/api/getItems")
      .then(response => this.setState({ arrayOfItems: response.data }))
  }

  handleSubmit(item, type) {
    axios
      .post("/api/additem?item=" + item + "&type=" + type)
      .then(response => this.setState({ arrayOfItems: response.data }))
      .catch(err => console.log(err))
  }
  handleText(val, text) {
    this.setState({ [text]: val })
  }
  handleWipeList(val) {
    let confirmer = window.confirm(
      `Are you sure you want to wipe the ENTIRE list?`
    )
    confirmer === true
      ? axios
          .delete("/api/wipelist/" + val)
          .then(response => this.setState({ arrayOfItems: response.data }))
          .catch(err => console.log(err))
      : null
  }
  handleItemDelete(id, item) {
    let confirmer = window.confirm(
        `Remove ${item} from list?`
      )
    axios
      .delete("/api/deleteitem/" + id)
      .then(response => this.setState({ arrayOfItems: response.data }))
  }

  render() {
    //// I'm passing props with 2 different methods, what is wrong with me...
    console.log(this.state)

    const RouteWithProps = ({
      path = "/todolist",
      exact,
      strict,
      component: Component,
      location,
      ...rest
    }) => (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        location={location}
        c
        render={props => <Component {...props} {...rest} />}
      />
    )

    return (
      <div className="homeMain">
        <Link
          to="/todolist"
          className="homeRoutingButtons"
          style={{ textDecoration: "none", color: "blue" }}
        >
          To Do List
        </Link>
        <Link
          to="/grocerylist"
          className="homeRoutingButtons"
          style={{ textDecoration: "none", color: "blue" }}
        >
          Grocery List
        </Link>
        <Switch>
          <Route
            path="/grocerylist"
            render={() => (
              <GroceryList
                inputText={this.state.grocerylisttext}
                handleSubmit={this.handleSubmit}
                handleText={this.handleText}
                arrayOfItems={this.state.arrayOfItems}
                handleItemDelete={this.handleItemDelete}
                handleWipeList={this.handleWipeList}
              />
            )}
          />
          <Route
            path="/todolist"
            render={() => (
              <ToDoList
                inputText={this.state.todolisttext}
                handleSubmit={this.handleSubmit}
                handleText={this.handleText}
                arrayOfItems={this.state.arrayOfItems}
                handleItemDelete={this.handleItemDelete}
                handleWipeList={this.handleWipeList}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}
export default Home
