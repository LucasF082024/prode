import { useState } from "react";
import { Equipo } from "../../pages/Equipo"

export const Partidos = ({ partidos }) => {
    // console.log(partidos)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    };
    const [equipo, setEquipo] = useState(0)

    return (
        <>
            {
                partidos.map((elem, index) => {
                    return (
                        <Equipo
                            key={index}
                            equipo={elem}
                            inputValue={equipo}
                            onChange={setEquipo}
                        />
                    )
                })
            }
            {/* <label htmlFor="Name">
                <input type="submit" id="team-1" name="team-1" />
                <input
                    type="text"
                    value={equipo}
                    onChange={setEquipo}
                />
            </label> */}
        </>
    )
}

// function MyForm() {
//     const [name, setName] = useState("");
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(`The name you entered was: ${name}`)
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//           <input 
//             type="text" 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <input type="submit" />
//       </form>
//     )
//   }