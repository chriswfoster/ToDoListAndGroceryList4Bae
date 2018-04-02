import React, { Component } from "react"
import axios from "axios"

import "./list.css"

class GroceryList extends Component {
  constructor() {
    super()
  }

  render() {
    const { inputText, handleSubmit, handleText, arrayOfItems, handleItemDelete } = this.props
    console.log(this.props)

    return (
      <div className="listMainDiv">
        <form onSubmit={() => handleSubmit(inputText, "grocerylist")}>
          <input
            type="text"
            onChange={e => handleText(e.target.value)}
            id="hi"
          />
          <input type="submit" value="SUBMIT" />
        </form>

        <div>
          {arrayOfItems.map(item => {
            <p onClick={() => handleItemDelete(item.id)}>{item.text}</p>
          })}
        </div>

        <button> CLEAR ALL </button>
      </div>
    )
  }
}
export default GroceryList
