import React from 'react'
import './Support.css'
function Support(props) {

   const data = {

        az: ["Mövzu başlığı","Mesaj"],
        en: ["Topic","Message"]
    }
  return (
    <div className={props.visible?'supportContainer'+props.colors:'none'}>

        <form>
            <label>{props.lang ? data.en[0]:data.az[0]}</label>
            <input type="text"></input>
            <label>{props.lang ? data.en[1]:data.az[1]}</label>
            <textarea></textarea>
            <input type="submit" value="Send"></input>
        </form>
    </div>
  )
}

export default Support