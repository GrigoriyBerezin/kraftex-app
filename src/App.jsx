import {useState} from "react"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Info from "./components/Info/Info.jsx"
import Strip from "./components/Strip/Strip"
import Finance from "./components/Finance/Finance.jsx";
import Relocation from "./components/Relocation/Relocation.jsx";
import Coin from "./components/Coin/Coin.jsx";
import Swap from "./components/Swap/Swap.jsx";
import Privileges from "./components/Privileges/Privileges.jsx";
import Facts from "./components/Facts/Facts.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Info/>
      <Strip/>
      <Finance/>
      <Relocation/>
      <Coin/>
      <Swap/>
      <Privileges/>
      <Facts/>
    </>
  )
}

export default App
