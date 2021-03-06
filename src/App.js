import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState('')

  useEffect(()=> {
    const fetchItems = async () => {
      const result = await axios(`https://hp-api.herokuapp.com/api/characters`)

      //console.log(result.data)

      //we've got the data, so we put setIsLoading as false.
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()

  }, [])

  return (
    <div className="container">
      <Header/>
      <Search text={text} setText={setText}/>
      <CharacterGrid isLoading={isLoading} items={items} text={text}/>
    </div>
  );
}

export default App;
