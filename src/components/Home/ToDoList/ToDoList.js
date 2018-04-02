import React, { Component } from "react"

import axios from "axios"

class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      inputText: "",
      arrayOfItems: []
    }
  }

  handleSubmit(item) {
    axios
      .post("/api/additem?item=" + item)
      .then(response => this.setState({ arrayOfItems: response.data }))
      .catch(err => console.log(err))
  }
  handleText(val) {
    this.setState({ inputText: val })
  }
  handleWipeList(val) {
    axios
      .delete("/api/wipelist")
      .then(response => this.setState({ arrayOfItems: response.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props)
    return <div className="listMainDiv">To do list</div>
  }
}
export default ToDoList
