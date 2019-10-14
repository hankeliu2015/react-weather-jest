import React from 'react';

const Navbar = ({changeForecast}) => {
  return (
    <div>
      <button className={"nav-button"} onClick={()=> changeForecast('currently')}>Currently</button>
      <button className={"nav-button"} onClick={()=> changeForecast('minutely')} >Minutely</button>
      <button className="nav-button" onClick={()=> changeForecast('hourly')} >Hourly</button>
      <button className="nav-button" onClick={()=> changeForecast('daily')} >Daily</button>

        <input type="text" list='location' name="location" />
        <datalist id="locaton">
          <option value="New York" />
          <option value="DC" />
          <option value="Boston" />
          <option value="Chicago" />
          <option value="Denvor" />
        </datalist>
        <input type="submit" value="Submit Location" />
        
    </div>
  )
}

export default Navbar;
