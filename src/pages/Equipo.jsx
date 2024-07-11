import { useState } from "react"

export const Equipo = ({ equipo, inputValue, onChange }) => {
    const [inputs, setInputs] = useState({
        equipo1: "",
        equipo2: ""
    });

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      
      setInputs(values => ({...values, [name]: value}))
    }
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   alert(`The name you entered was: ${name}`)
    // }
  
    // return (
    //   <form onSubmit={handleSubmit}>
    //     <label>Enter your name:
    //       <input 
    //         type="text" 
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </label>
    //     <input type="submit" />
    //   </form>
    // )

    return (
        <form>
            {
                equipo?.score.map((elem, index) => {
                    return (
                        <div key={index}>
                            <h4>{elem.name}</h4>
                            <img src={elem.flag} alt={`${elem.name}-flag`} />
                            <label htmlFor="Name">
                                <input type="number" id="team-1" name="team-1" onChange={handleChange}/>
                            </label>
                        </div>
                    )
                })
            }
             <label htmlFor="Name">
                <input type="submit" id="team-1" name="team-1" />
            </label>
        </form>
    )
}
//  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png"