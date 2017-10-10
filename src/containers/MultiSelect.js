import React from 'react'
import Select from '../components/Select'
import { connect } from 'react-redux'

import { showValues, hideValues, updateFilter } from '../state'

const MultiSelect = (props) => {
  return (
    <Select {...props} />
  )
}

export default connect(
  ({filter, values, filteredValues, showValues}) => ({
    values: filter ? filteredValues : values,
    filter,
    showValues
  }),
  (dispatch) => ({
    onFocus: () => { dispatch(showValues()) },
    onBlur: () => { dispatch(hideValues()) },
    onChange: (value) => { dispatch(updateFilter(value)) }
  })
)(MultiSelect)
