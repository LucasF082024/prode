import { useState } from "react";
import { Equipo } from "../../pages/Equipo"

export const Partidos = ({ partidos }) => {
    // console.log(partidos)
    return (
        <>
            {
                partidos.map((elem, index) => {
                    return (
                        <Equipo
                            key={index}
                            equipo={elem}
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