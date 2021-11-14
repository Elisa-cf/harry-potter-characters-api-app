import React from 'react'

const CharacterItem = (props) => {
    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              {props.item.image ? <img src={props.item.image} alt=''/> : <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png" /> }
            </div>

            <div className='card-back'>
              <h1>{props.item.name}</h1>
              <ul>
                <li>
                  <strong>Actor Name:</strong> {props.item.actor}
                </li>
                <li>
                  <strong>House:</strong> {props.item.house}
                </li>
                <li>
                  <strong>Birthday:</strong> {props.item.yearOfBirth}
                </li>
                <li>
                  <strong>Ancestry:</strong> {props.item.ancestry}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
    

export default CharacterItem
