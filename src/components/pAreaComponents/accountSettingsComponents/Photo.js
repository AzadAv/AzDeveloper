import React from 'react'
import './Photo.css'
function Photo() {
  return (
    <div className='photoContainer'>
        <form>
            <h5>Image preview</h5>
            <div className='imgContainer'>Image Container</div>
            <h5>Add/Change Image</h5>
            <div>
            <input value="" id='uploadItem'></input>
            <input type="submit" id='uploadItem'></input>
            </div>
           <input type="submit"></input>
        </form>
    </div>
  )
}

export default Photo