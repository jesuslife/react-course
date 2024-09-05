import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component{
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.png'},
      {name: 'Lechuga', price: 200, img: '/productos/lechuga.png'},
      {name: 'cebolla', price: 100, img: '/productos/cebolla.png'}
    ],
    carro: [],
    esCarroVisible: false
  }

  agregarAlCarro = (producto) =>{
    const {carro} = this.state
    if (carro.find((x) => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })

    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return 
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  render(){
    // console.log(this.state.carro)
    const {esCarroVisible} = this.state

    return(
      <div>
        <Navbar 
          carro={this.state.carro}
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
