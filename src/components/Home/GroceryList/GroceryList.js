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

    return (
      <div className="listMainDiv">
        <form
          onSubmit={() => handleSubmit(inputText, "grocerylist")}
          className=" listFlex"
        >
          <input
            type="text"
            onChange={e => handleText(e.target.value, "grocerylisttext")}
            autoFocus
            className="inputbox"
          />
          <input type="submit" value="SUBMIT" className="submitButton" />
        </form>

        <div className="listFlex">
          {arrayOfItems
            .map(
              item =>
                item.type_is === "grocerylist" ? (
                  <p
                    key={item.id}
                    onClick={() => handleItemDelete(item.id, item.todo)}
                    className="listPs"
                  >
                    {item.todo}
                  </p>
                ) : null
            )
            .reverse()}
          <button
            className="listPs"
            onClick={() => handleWipeList("grocerylist")}
            style={{
              backgroundColor: "red",
              marginTop: "10vh",
              fontSize: "1em"
            }}
          >
            CLEAR ALL
          </button>
        </div>
      </div>
    )
  }
}
export default GroceryList
