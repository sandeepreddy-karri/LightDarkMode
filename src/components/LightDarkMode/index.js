// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isdark: true}

  darkmode = () => {
    this.setState(prevState => ({isdark: !prevState.isdark}))
  }

  render() {
    const {isdark} = this.state
    return (
      <div className="background">
        <div className={isdark ? 'dark' : 'light'}>
          <h1 className={isdark ? 'whitetext' : 'darktext'}>
            Click To Change Mode
          </h1>
          <button className="modebutton" type="button" onClick={this.darkmode}>
            {isdark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
