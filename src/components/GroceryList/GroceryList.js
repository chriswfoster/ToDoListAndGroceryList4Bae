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
        .then(response => this.setState({arrayOfItems: response.data}))
        .catch(err => console.log(err))
    }
    handleText(val){
        this.setState({inputText: val})
    }
    handleWipeList(val){
        axios.delete('/api/wipelist')
        .then (response => this.setState({arrayOfItems: response.data}))
        .catch(err => console.log(err))
    }
    handleItemDelete(item){
        axios.delete('/api/deleteitem?item='+item)
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