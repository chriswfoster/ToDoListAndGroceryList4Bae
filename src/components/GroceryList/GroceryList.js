import React, {Component} from 'react'
import axios from 'axios'

import '../list.css'

class GroceryList extends Component{
    constructor(){
        super()
        this.state = {
            inputText: "",
            arrayOfItems: []
        }
    }

    handleSubmit(item){
        axios.post('/api/additem?item='+item)
    }
    handleText(val){
        this.setState({inputText: val})
    }

render(){
    const {arrayOfItems} = this.state;
    
return(
<div className="listMainDiv">
<form onSubmit={()=> this.handleSubmit(this.state.inputText)}>
<input onChange={(e)=> this.handleText(e.target.value)}/>
<input type="submit" text="ADD"/>
</form>

<div>
    {arrayOfItems.map((item) => {
        <p>
            {item}
            </p>
    })}
</div>

<button> CLEAR ALL </button>
</div>
)
}
}
export default GroceryList