import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  // onFormSubmit(e) {
  //   e.preventDefault()
  //   console.log(this.state.term)
  // }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui seegment">
        {/* <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}> */}
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;