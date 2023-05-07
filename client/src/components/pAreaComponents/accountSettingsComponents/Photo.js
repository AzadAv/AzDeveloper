import React from 'react'
import './Photo.css'
function Photo(props) {
  return (
    <div className={props.visible?('photoContainer'+props.colors):'none'}>
        <div>
              <h5>Image preview</h5>
              <div className='imgContainer'>Image Container</div>
        </div>
        <form>
            <h5>Add/Change Image</h5>
            <div>
              <input value="" id='uploadItem'></input>
              <button className='chooseButton'>Choose</button>
            </div>
              <button type="submit" className='chooseButton'>Submit</button>
        </form>
    </div>
  )
}

export default Photo