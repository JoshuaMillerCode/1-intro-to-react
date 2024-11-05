const Hello = () => {
  const language = "eng"
  switch(language){
    case "eng":
      return <h1>Hello</h1>
    case "esp":
      return <h1>Hola</h1>
    default:
      return <h1>No Language Detected</h1>
  }
}