import React, {useState} from 'react'



export const Search = (props) => {
 

    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" placeholder="Search characters" value={props.text}
                onChange={(e) => props.setText(e.target.value)}
                 autoFocus/>
            </form>
        </section>
    )
}

export default Search