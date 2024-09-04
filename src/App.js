import { Component } from 'react';
import Productos from './components/Productos'


class App extends Component{
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.png'},
      {name: 'Lechuga', price: 200, img: '/productos/lechuga.png'},
      {name: 'cebolla', price: 100, img: '/productos/cebolla.png'}
    ]
  }
  render(){
    return(
      <div>
        <Productos
          agregarAlCarro={()=> console.log('No hace nada')}
          productos={this.state.productos}
        
        />
        <p>HOLA MUNDO</p>
      </div>
    )
  }
}

export default App;
