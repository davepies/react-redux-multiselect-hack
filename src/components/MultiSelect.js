import React, { Component } from 'react'
import Radium from 'radium'
import onClickOutside from 'react-onclickoutside'

class MultiSelect extends Component {

  state = {
    shouldShowValues: false
  }

  handleFocus = () => {
    this.setState({ shouldShowValues: true })
  }

  handleClickOutside = () => {
    this.setState({ shouldShowValues: false })
  }

  render () {
    const {
      onFilterChange,
      onValueSelect,
      onValueRemove,
      values = [],
      selectedValues = []
    } = this.props

    const {
      shouldShowValues,
    } = this.state

    return (
      <div style={styles.wrapper}>
        <input
          type='text'
          onFocus={() => this.handleFocus()}
          onChange={(e) => onFilterChange(e.target.value)}
        />
        <div style={styles.values}>
          <ul style={[styles.list, styles[shouldShowValues ? 'listVisible' : null]]}>
            {values.map(
              (value, i) => (
                <li key={i}>
                  <span
                    style={styles.listItem}
                    onClick={() => { onValueSelect(value) }}
                  >
                    {value}
                  </span>
                </li>
              )
            )}
          </ul>
          <span style={styles.darth} />
        </div>
        {!!selectedValues.length &&
          <div>
            <span>You have selected:</span>
            {
              selectedValues.map(
                (v,i) =>
                  <li key={i}>
                    {v} <span onClick={() => onValueRemove(v)}>x</span>
                  </li>
              )
            }
          </div>
        }
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'inline-block'
  },
  values: {
    position: 'relative'
  },
  list: {
    display: 'none',
    listStyle: 'none',
    color: 'white'
  },
  listVisible: {
    display: 'inline-block'
  },
  listItem: {
    background: 'black',
    display: 'inline-block',
    cursor: 'pointer'
  },
  darth: {
    content: '',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6,
    backgroundImage: 'url(http://digitalspyuk.cdnds.net/15/50/1600x800/landscape-1449498579-darth-vader-star-wars.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: '-1'
  }
}

export default onClickOutside(Radium(MultiSelect))
