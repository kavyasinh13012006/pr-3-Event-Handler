// import './App.css'
import Filterdeta from "./Filterdeta"
import 'bootstrap/dist/css/bootstrap.min.css';
import { category, Item } from "./productData";
import { useState } from "react";
import './style.css'; // Import the newly named CSS file

function App() {
  const [recode, setRecode] = useState(Item);

  const filterIteam = (filtercat) => {
    if (filtercat === "all") {
      setRecode(Item)
    }else{
      let filers = Item.filter((val)=>val.category === filtercat)
      setRecode(filers)
    }
  }

  return (
    <div>
      <Filterdeta category={category} Item={recode} filterIteam={filterIteam} />
    </div>
  )
}

export default App;
