import React, { Component } from "react"

import "./list.css"

class GroceryList extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      inputText,
      handleSubmit,
      handleText,
      arrayOfItems,
      handleItemDelete,
      handleWipeList
    } = this.props
    console.log(this.props)

    return (
      <div className="listMainDiv">
        <form onSubmit={() => handleSubmit(inputText, "grocerylist")}>
          <input type="text" onChange={e => handleText(e.target.value)} />
          <input type="submit" value="SUBMIT" />
        </form>

        <div>
          {arrayOfItems.map(
            item =>
              item.type_is === "grocerylist" ? (
                <p key={item.id} onClick={() => handleItemDelete(item.id)}>
                  {item.todo}
                </p>
              ) : null
          )}
        </div>

        <button onClick={() => handleWipeList("grocerylist")}>
          {" "}
          CLEAR ALL{" "}
        </button>
      </div>
    )
  }
}
export default GroceryList
