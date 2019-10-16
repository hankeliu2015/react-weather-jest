import React, {Component} from 'react';

class Navbar extends Component  {
  state = {
    location: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {

    return (
      <div>
        <button className={"nav-button"} onClick={()=> this.props.changeForecast('currently')}>Currently</button>
        <button className={"nav-button"} onClick={()=> this.props.changeForecast('minutely')} >Minutely</button>
        <button className="nav-button" onClick={()=> this.props.changeForecast('hourly')} >Hourly</button>
        <button className="nav-button" onClick={()=> this.props.changeForecast('daily')} >Daily</button>

        <input type="text" list='location' name="location" value={this.state.location} onChange={this.handleChange}/>
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

}

export default Navbar;

{/*
  use state.locaton to store the location data
  onSubmit will invoke handleSubmit(), launch fetch to openCage pass in location as argument. return the lan/lat.
  another callback function in app.js, take the lan/lat argment, fetch dark sky API.
  state.weatherData in App.js will be updated, pass into props to child components.


  */}
