import { Component } from "react";

class Prodcuto extends Component{
    render(){
        // console.log(this.props)
        const {producto} = this.props
        return (
            <div>
                <img alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        )
    }
}

export default Prodcuto