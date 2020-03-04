import React, {Component} from 'react';

class Navbar extends Component  {
  state = {
    location: '',
    lng: '',
    lat: '',
    city: '',
    state: '',
    country: '',
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const PLACENAME = this.state.location;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${PLACENAME}&key=${process.env.REACT_APP_GEO_CODING}`)
    .then(resp => resp.json())
    .then(location => {
      this.setState({
        lat: location.results[0].annotations.DMS.lat,
        lng: location.results[0].annotations.DMS.lng,
        city: location.results[0].components.city,
        state: location.results[0].components.state,
        country: location.results[0].components.country
      })
      this.props.reqeuestWeatherData(this.state.lat, this.state.lng);
    })
  }
  render () {
    return (
      <div>
        <button className={"nav-button"} onClick={()=> this.props.changeForecast('currently')}>Currently</button>
        <button className={"nav-button"} onClick={()=> this.props.changeForecast('minutely')} >Minutely</button>
        <button className="nav-button" onClick={()=> this.props.changeForecast('hourly')} >Hourly</button>
        <button className="nav-button" onClick={()=> this.props.changeForecast('daily')} >Daily</button>

        <form onSubmit={this.handleSubmit}>
          <input type="text" list='location' name="location" value={this.state.location} onChange={this.handleChange}/>
          <datalist id="location">
            <option value="New York" />
            <option value="DC" />
            <option value="Boston" />
            <option value="Chicago" />
            <option value="Denvor" />
          </datalist>
          <input type="submit" value="Submit Location" />
        </form>
          {this.state.city ? <h4>Location: {this.state.city},  {this.state.state}, {this.state.country}</h4>: null}
      </div>
    )

  }

}

export default Navbar;
