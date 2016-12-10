import React from 'react'

//stateless component (currently advised by React as more performant)
const Movie = props => (
  <a className="movie" href={props.url} target="_blank">
    <img style={{width:150}} src={props.picture} alt={props.name}/>
    <div>Name: {props.name}</div>
    <div>Company: {props.company}</div>
  </a>
)

Movie.propTypes = {
  name: React.PropTypes.string,
  company: React.PropTypes.string,
  picture: React.PropTypes.string,
  url: React.PropTypes.string,
}

export default Movie