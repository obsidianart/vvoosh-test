import React from 'react'
import Movie from './movie'
import movies from '../fixtures/movies' //The exercise seems not to include asyncronous call, adding to fixture for now and considering this a mock dev enviroment

const SHOW_ALL_COMPANIES = 'All'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movies,
      companySelected: SHOW_ALL_COMPANIES
    }
  }

  handleSetCompany (event) {
    this.setState({
      companySelected: event.target.value
    })
  }

  //Get a list of unique companies (can be refactored using sets)
  getCompanies () {
    return this.state.movies.reduce((companies, movie)=>{
      if (!~companies.indexOf(movie.company)){
        companies.push(movie.company)
      }
      return companies
    },[SHOW_ALL_COMPANIES])
  }

  render() {
    //NOTE on performance: filter on every render have downsides on performance
    //                     considering react virtual DOM and the amount of movies
    //                     those are not noticeable
    //NOTE on readability: bitwise operators for indexOf might be hard for junior
    //                     developer, as other choices I made 

    return (
      <div>
        <h4>
          Company:
          <select value={this.state.companySelected} onChange={this.handleSetCompany.bind(this)}>
            {
              this.getCompanies().map(company=>(
                <option
                  key={company}
                  value={company}
                  >
                    {company}
                  </option>
              ))
            }
          </select>
        </h4>
        <hr />
        {
          this.state.movies
            .filter(movie=> (~[movie.company, SHOW_ALL_COMPANIES].indexOf(this.state.companySelected)))
            .map(movie=>(
              <div key ={movie.name}>
                <Movie
                  name={movie.name}
                  url={movie.url}
                  picture={movie.image}
                  company={movie.company}
                />
                <hr />
              </div>
          ))
        }
      </div>
    )
  }
}