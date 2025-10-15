import Chai from "./chai"

function App() {
  
  const username = "CHai aur Code"
                   //{...} use this to inject variable in return & {...} is called evaluated expressions ,you cant use if,else,for..etc here 
  return (
    <>
      <Chai/>
      <h1>Chai aur react {username}</h1>                
      <p>test para</p>
   </>
  )
}

export default App
