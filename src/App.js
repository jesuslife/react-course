import {useEffect, useState} from 'react'

/*
Reglas de los hooks
    1. No se llaman en loops, ni condiciones, ni while 
    2. solo se llaman en 2 partes:
        - Componentes de react(functional components)
        - custom hooks
    3. Cuando creemos un custom hook, tiene que comenzar con use*
*/
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }

    return [contador, incrementar]
}

const Interval = ({contador}) => {
    useEffect(() => {
        const i = setInterval(() => console.log(contador), 1000)
        // desincribir sirver cuando usa conexiones a tablas o web sockets
        return () => clearInterval(i)
    }, [contador])
    return(
        <p>Intervalo</p>
    )
}


const App = () => {
    /* useState retorna un arreglo
    [0] : valor initial de useState
    [1] : function que perimite actualizar el valor de la variable
    */ 
    const [contador, incrementar] = useContador(0)
    
    /*
    Use efect recibe 2 argumentos
        1. funcion con la logica que va a ejecutar
        2. dependencias que necesita para funcionar
    
        useEffect(() => {}, [])
    */
    
    useEffect(() =>{
        document.title = contador
    },[contador])

    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
            <Interval contador = {contador}/>

        </div>
    )
}


export default App