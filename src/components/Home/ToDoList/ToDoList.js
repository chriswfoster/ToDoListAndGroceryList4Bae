import React, { Component } from "react"

class ToDoList extends Component {
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
          onSubmit={() => handleSubmit(inputText, "todolist")}
          className=" listFlex"
        >
          <input
            type="text"
            onChange={e => handleText(e.target.value, "todolisttext")}
            autoFocus
            className="inputbox"
          />
          <input type="submit" value="SUBMIT" className="submitButton" />
        </form>

        <div className="listFlex">
          {arrayOfItems
            .map(
              item =>
                item.type_is === "todolist" ? (
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
            onClick={() => handleWipeList("todolist")}
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
export default ToDoList
