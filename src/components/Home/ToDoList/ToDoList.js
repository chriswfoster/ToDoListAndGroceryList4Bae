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
        <form onSubmit={() => handleSubmit(inputText, "todolist")}>
          <input type="text" onChange={e => handleText(e.target.value, "todolisttext")} autoFocus  />
          <input type="submit" value="SUBMIT" />
        </form>

        <div>
          {arrayOfItems.map(
            item =>
              item.type_is === "todolist" ? (
                <p key={item.id} onClick={() => handleItemDelete(item.id)}>
                  {item.todo}
                </p>
              ) : null
          )}
        </div>

        <button onClick={() => handleWipeList("todolist")}> CLEAR ALL </button>
      </div>
    )
  }
}
export default ToDoList
