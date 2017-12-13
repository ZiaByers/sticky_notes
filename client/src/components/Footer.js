import React from 'react'
import { Menu } from 'semantic-ui-react'
import { connect }  from 'react-redux'
import { setFilter } from '../actions/filter'

class Footer extends React.Component {
  state = { activeFilter: this.props.filter }

  handleClick = (e, { name }) => {
    this.props.dispatch(setFilter(name))
    this.setState({ activeFilter: name })
  }

  render() {
    const { activeFilter } = this.state
    return(
      <Menu compact>
        <Menu.Item
          active={activeFilter === 'All' }
          onClick={this.handleClick}
          name='All'
        >
          All Notes
        </Menu.Item>
        <Menu.Item
          active={activeFilter === 'blue' }
          onClick={this.handleClick}
          name='blue'
        >
          Blue Notes
        </Menu.Item>
        <Menu.Item
          active={activeFilter === 'yellow' }
          onClick={this.handleClick}
          name='yellow'
        >
          Yellow Notes
        </Menu.Item>
        <Menu.Item
          active={activeFilter === 'pink' }
          onClick={this.handleClick}
          name='pink'
        >
          Pink Notes
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return { filter: state.filter }
}

export default connect(mapStateToProps)(Footer)
