import React from 'react'

class GoogleAuth extends React.Component {
  state = { isSignedIn: null } // we do not whether or not user is signed in

  componentDidMount() {
    // arrow func here indicates that the request is complete
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        // once entire gapi is ready to go
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        // listen is a prototype callback funcs of isSignedIn obj
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed in</div>
    } else {
      return <div>I am NOT signed in</div>
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth