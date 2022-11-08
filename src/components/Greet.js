import React from 'react'

// function Greet() {
//     return <h1>Hello Mandara</h1>
// }
//const Greet = () => <h1>Hello Mandara!</h1>

//props
const Greet = props => {
   console.log(props)
   return<h1>Hello {props.name} {props.surName}</h1>
}

//Destructuring(1st way)
/* const Greet = ({name,surName}) => {
    return (
        <div>
            <h1>
                Hello {name}  {surName}
            </h1>
        </div>
    )
} */

//Destructuring(2nd way)
/* const Greet = props => {
    const {name, surName} = props
    return (
        <div>
            <h1>
                Hello {name}  {surName}
            </h1>
        </div>
    )
} */

export default Greet;