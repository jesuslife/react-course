/* un componente fucional lo podemo definir como
 una constante a la cual le asignamos una fat arrow function
 o tambine puede ser una fucion
*/

/*
function App(){

}

const App = () => {
  
}
*/

// function impura: siempre regresa un valor distinto
const impura = () => new Date().toLocaleString()
console.log(impura())


// en react todos los componentes son puros (siempre retornan lo mismo)
const Micomponente = ({miProp}) => {
    return (
      <div>
        Nombre: {miProp}
      </div>
    )
}

const App = () => {
  return (
    <Micomponente miProp={'gerardo'}/>
  )
}


export default App;
