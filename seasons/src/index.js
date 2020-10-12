import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = { lat: null, errMsg: '' }
  // }

  state = { lat: null, errMsg: '' } // equivalent to above constructor

  componentDidMount() {
    console.log("Component was rendered to the screen!")
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({ errMsg: err.message })
    )
  }

  componentDidUpdate() {
    // render was called, re-render, before this.
    console.log("Component was just updated!")
  }

  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>
    }
    if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request..." />
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));