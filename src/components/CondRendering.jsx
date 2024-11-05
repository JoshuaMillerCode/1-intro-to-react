// Different ways to implement Conditional Rendering

// function IsEven() {
//   const number = 5;
//   if (number % 2 === 0) {
//     return <h1>It is even</h1>
//   } else {
//     return <h1>It is odd</h1>
//   }
// }

// const IsEven = () => {
//   let number = 6;
//   let result

//   if (number % 2 === 0) {
//     result = <h1>It is even</h1>
//   } else {
//     result = <h1>It is odd</h1>
//   }

//   return result
// }

// const IsEven = () => {
//   let number = 6;
//   return number % 2 === 0 ? <h1>It is even</h1> : <h1>It is odd</h1>
// }

// const IsEven = () => {
//   // This will not tell IfEven different example
//   const names = ["john", "rob"];
//   return (
//     <>
//       <h1>{names.join(", ")}</h1>
//       <h3>{
//             names.length > 1 ? 
//               "These people are"
//             : 
//               "This person is"
//           } cool </h3>
      
//       <p>{names.length} in the list</p>
//     </>
//   )
// }

const IsEven = () => {
  let number = 6
  const condition = number % 2 === 0

  const ifTrue = () => <h1>It is even</h1>

  const ifFalse = () => <h1>It is odd</h1>

  return condition ? ifTrue() : ifFalse()
}


export default IsEven