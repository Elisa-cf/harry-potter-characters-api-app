import React from 'react'
import { nanoid } from "nanoid";
import CharacterItem from './CharacterItem'

const CharacterGrid = ( {items, isLoading }) => {
    return isLoading ? (
    <h1>Loading...</h1>
    ) : (
    <section className='cards'>
        {items.map(item => (
        <CharacterItem key={nanoid()} item={item}></CharacterItem>
        )) }
        </section>
   )
}

export default CharacterGrid
