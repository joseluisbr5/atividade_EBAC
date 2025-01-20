import { useState, useEffect} from "react"
import './style.css'

const Formulario = () => {
    const [Altura, setAltura] = useState('')
    const [Peso, setPeso] = useState('')
    const [resultado, setResultado] = useState(null)
    
    const handleBotaoClicado = () => {
        const IMC = calcularIMC()
        setResultado(IMC)

    }

    const calcularIMC = () => {
        
    
        const IMC = Peso / (parseFloat(Altura) * parseFloat(Altura))
        const resultado = IMC.toFixed(2)
        if (IMC >= 40) {
            return(
                <p>Obesidade grave {resultado}</p>
            )
        }
            else if (IMC >= 30) {
                return(
                    <p>Obesidade {resultado}</p>
                )
            }
            else if (IMC >= 25) {
                return(
                    <p>Sobrepeso {resultado}</p>
                )
            }
            else if (IMC >= 18.5) {
                return(
                    <p>Normal {resultado}</p>
                )
            }
            else {
                return(
                    <p>Abaixo do peso {resultado}</p>
                )
            }
           
   
    }
 
      
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <h1>Calcular IMC</h1>
            <input type="text" placeholder="Peso" onChange={(e) => setPeso(e.target.value)} />
            <br />
            <input type="text" placeholder="Altura" onChange={(e) => setAltura(e.target.value)}/>
            <br />
            <button onClick={handleBotaoClicado} type="submit">Calcular</button>
           {resultado && <p>Seu IMC: {resultado}</p>}
        </form>
    )
}

export default Formulario