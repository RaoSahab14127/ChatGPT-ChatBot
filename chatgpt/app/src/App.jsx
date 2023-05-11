import { useState } from 'react'
import CApp from "./App copy"
function App() {
  const [chat, setChat] = useState(false)
  let Click = ()=>{
    setChat(true);
    console.log(chat);
  }
  return (
    <div className="App">
     <CApp></CApp>
    </div>
  )
}

export default App