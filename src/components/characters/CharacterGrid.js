import React from 'react'
import { nanoid } from "nanoid";

const CharacterGrid = ( {items, isLoading }) => {
    return isLoading ? <h1>Loading...</h1> : <section className='cards'>
        {items.map(item => (<h1 key={nanoid()}>{item.name}</h1>) )}</section>
}

export default CharacterGrid
