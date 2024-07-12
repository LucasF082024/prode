import { useState } from "react"
import "./equipo.css";
import {calcularPuntaje} from "../utils/procesarPartidos";
import { procesarUsuario } from "../utils/procesarUsuario";

export const Equipo = ({ equipo, inputValue, onChange, setValue, user}) => {
    const [inputs, setInputs] = useState({
        equipo1: 0,
        equipo2: 0
    });

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      
      setInputs(values => ({...values, [name]: value}))
    }
  
     const handleSubmit = (event) => {
       event.preventDefault();
       try {
        console.log(equipo);
        const puntaje = calcularPuntaje(equipo, Number(inputs.equipo1), Number(inputs.equipo2));
        console.log(puntaje);
//
        const match = {
            match: equipo,
            result: {
                equipo1: inputs.equipo1,
                equipo2: inputs.equipo2
            },
            score: puntaje
        };

    // Process the user
    const updatedUser = procesarUsuario(user, match, puntaje);

    // Find the user index and update the users array
        console.log(updatedUser);
//
        setValue(prev => prev +puntaje);
        alert(`Tu puntaje es de: ${puntaje}`)
       } catch (error) {
            console.error(error);
       }
       
     }

    return (
        <form>
            {
                equipo?.score.map((elem, index) => {
                    return (
                        <div key={index}>
                            <h4>{elem.name}</h4>
                            <img src={elem.flag} alt={`${elem.name}-flag`} />
                            <label htmlFor="Name">

                                <input type="number" className="input-equipo" value={inputs[`equipo${index+1}`]} id={index} name={`equipo${index+1}`} onChange={handleChange}/>
                            </label>
                        </div>
                    )
                })
            }
             <label htmlFor="Name">
                <input onClick={handleSubmit} type="submit" id="team-1" name="team-1" />
            </label>
        </form>
    )
}
//  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png"