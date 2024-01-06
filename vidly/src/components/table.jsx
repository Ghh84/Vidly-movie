import React, { Component } from 'react'
class Table extends Component {
  state = {}
  render() {
    const movies = this.props.movies
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td className="">{movie.title}</td>
              <td className="">{movie.genre.name}</td>
              <td className="">{movie.numberInStock}</td>
              <td className="">{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.props.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table
