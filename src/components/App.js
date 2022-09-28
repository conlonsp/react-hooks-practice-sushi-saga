import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushi] = useState([])
  const [position, setPosition] = useState(0)
  const [eatSushi, setEatSushi] = useState([])
  const [balance, setBalance] = useState(150)

  const count = 4

  function incrementPosition() {
    setPosition(position + count)
  }

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushi(data))
  }, [])

  function handleEatSushi(piece) {
    const remainingBalance = balance - piece.price
    
    if(remainingBalance >= 0) {
      setBalance(remainingBalance)

      setSushi(sushis.map(sushi => 
        sushi.id === piece.id ? { ...sushi, eaten: true } : sushi))
  
      if(!eatSushi.includes(piece.id)) {
        const justEaten = [...eatSushi, piece.id]
        setEatSushi(justEaten)
      }
    }
  }

  return (
    <div className="app">
      <SushiContainer
        incrementPosition={incrementPosition}
        handleEatSushi={handleEatSushi}
        sushis={sushis.slice(position, position + count)}
      />
      <Table plates={eatSushi} balance={balance}/>
    </div>
  );
}

export default App;
