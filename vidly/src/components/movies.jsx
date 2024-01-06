import React, { Component } from 'react'
import { getMovies } from './../services/fakeMovieService'
import Table from './table'
class Movies extends Component {
  state = {
    movies: getMovies(),
  }
  handleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.setState({ movies })
  }
  render() {
    return (
      <div>
        <h1>There are {this.state.movies.length} movies</h1>
        <Table
          movies={this.state.movies}
          handleDelete={this.handleDeleteMovie}
        />
      </div>
    )
  }
}

export default Movies
