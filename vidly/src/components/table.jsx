import React, { Component } from 'react'
class Table extends Component {
  state = {
    movies: this.props.movies,
  }
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr>
              <td className="">{movie.title}</td>
              <td className="">{movie.genre.name}</td>
              <td className="">{movie.numberInStock}</td>
              <td className="">{movie.dailyRentalRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table
