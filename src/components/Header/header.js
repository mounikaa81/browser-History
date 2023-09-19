import {Component} from 'react'
import './header.css'
import MainComponent from '../MainComponent/index'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {val: props.obj, key: ''}
  }

  fun = e => {
    const {key} = this.state
    const {obj} = this.props
    console.log(e.target.value)

    const lis = obj.filter(m =>
      m.title.toLowerCse().includes(key.toLowerCase()),
    )
    this.setState({val: lis, key: e.target.value})
  }

  f1 = f => {
    const {val} = this.state

    const list = val.filter(m => m.id !== f)

    this.setState({val: list})
  }

  render() {
    const {val} = this.state
    console.log(val)

    return (
      <div>
        <div className="start">
          <div className="major">
            <img
              className="image"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
            <div className="main1">
              <img
                className="search1"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
              />
              <input
                className="inp"
                onChange={this.fu}
                type="search"
                placeholder="Search history"
              />
            </div>
          </div>
        </div>

        {val.length !== 0 ? (
          <ul className="items">
            {val.map(x => (
              <MainComponent obj={x} key={x.id} func={this.f1} />
            ))}
          </ul>
        ) : (
          <div className="history">
            <p className="text-4xl text-bold">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}
export default Header
