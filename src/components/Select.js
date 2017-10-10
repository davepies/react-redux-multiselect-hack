import React from 'react'
import Radium from 'radium'

const MultiSelect = ({filter, showValues, onFocus, onBlur, onChange, values = []}) => {
  return (
    <div>
      <input
        type='text'
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onChange={(e) => onChange(e.target.value)}
      />
      <div>
        <ul style={[styles.list, styles[showValues ? 'visible' : null]]}>
          {values.map(
            (value, i) => <li key={i}>{value}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

const styles = {
  list: {
    listStyle: 'none',
    display: 'none'
  },
  visible: {
    display: 'block'
  }
}

export default Radium(MultiSelect)
