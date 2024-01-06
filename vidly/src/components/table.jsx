import React, { Component } from 'react'
class Table extends Component {
  state = {
    movies: this.props.movies,
    handleOnclick: this.props.handleDelete,
  }
  render() {
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
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td className="">{movie.title}</td>
              <td className="">{movie.genre.name}</td>
              <td className="">{movie.numberInStock}</td>
              <td className="">{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.state.handleOnclick(movie)}
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
