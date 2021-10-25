import React from 'react'
import { nanoid } from "nanoid";
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ( {items, isLoading, text }) => {
    return isLoading ? (
    <Spinner />
    ) : (
    <section className='cards'>
        {items.filter(item => text === "" ? true : item.name.toLowerCase().includes(text.toLowerCase()))
        .map(item => (
            <CharacterItem key={nanoid()} item={item}></CharacterItem>
        )) }
    </section>
   )
}

export default CharacterGrid
