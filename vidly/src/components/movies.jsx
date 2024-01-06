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
    const movies = this.state.movies
    if (movies.length == 0) return <p>There is no movies in the database</p>
    return (
      <div>
        <h1> Showing {movies.length} movies in the database.</h1>
        <Table movies={movies} handleDelete={this.handleDeleteMovie} />
      </div>
    )
  }
}

export default Movies
