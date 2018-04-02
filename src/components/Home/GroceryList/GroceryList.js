import React, {Component} from 'react'
import axios from 'axios'

import './list.css'

class GroceryList extends Component{
    constructor(){
        super()
        this.state = {
            inputText: "",
            arrayOfItems: []
        }
    }



render(){
    const {arrayOfItems} = this.state;
    console.log(this.props)
    
return(
<div className="listMainDiv">
<form onSubmit={()=> this.handleSubmit(this.state.inputText)}>
<input onChange={(e)=> this.handleText(e.target.value)}/>
<input type="submit" text="ADD"/>
</form>

<div>
    {arrayOfItems.map((item) => {
        <p onClick={()=> this.handleItemDelete(item.id)}>
            {item.text}
            </p>
    })}
</div>

<button> CLEAR ALL </button>
</div>
)
}
}
export default GroceryList