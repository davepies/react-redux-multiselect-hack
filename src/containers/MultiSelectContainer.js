import React from 'react'
import MultiSelect from '../components/MultiSelect'
import { connect } from 'react-redux'

import { updateFilter, addValue, removeValue } from '../state'

const MultiSelectContainer = (props) => {
  return (
    <MultiSelect {...props} />
  )
}

export default connect(
  ({filter, values, filteredValues, selectedValues}) => ({
    values: filter ? filteredValues : values,
    selectedValues
  }),
  (dispatch) => ({
    onFilterChange: (value) => { dispatch(updateFilter(value)) },
    onValueSelect: (value) => { dispatch(addValue(value)) },
    onValueRemove: (value) => { dispatch(removeValue(value)) }
  }),
  null,
  { pure: true }
)(MultiSelectContainer)
