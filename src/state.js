// I am a redux duck :)
// As mentioned in the interview - putting it all in one file, following this suggestion:
// https://github.com/erikras/ducks-modular-redux

// Actions
const UPDATE_FILTER = 'multiselect/UPDATE_FILTER'
const ADD_VALUE = 'multiselect/ADD_VALUE'
const REMOVE_VALUE = 'multiselect/REMOVE_VALUE'

const initialState = {
  filter: '',
  values: ['Han', 'Luke', 'Lea', 'Chewbacca'],
  filteredValues: [],
  selectedValues: []
}

// Reducer - helpers
const addSelected = (selectedValues, newValue) => {
  if (selectedValues.includes(newValue)) {
    return selectedValues
  }
  return [...selectedValues, newValue]
}

const removeSelected = (selectedValues, valueToRemove) => {
  return [
    ...selectedValues
  ].filter(v => v !== valueToRemove)
}

// Reducer
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case ADD_VALUE:
      return {
        ...state,
        selectedValues: addSelected(
          state.selectedValues, action.value
        )
      }
    case REMOVE_VALUE:
      return {
        ...state,
        selectedValues: removeSelected(
          state.selectedValues,
          action.value
        )
      }
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.value,
        filteredValues:
          state.values.filter(
            // this is slow would need tweaking
            value => (value.match(new RegExp('^' + action.value, 'gi')))
          )
      }
    default: return state
  }
}

// Action Creators
export const updateFilter = (value) => ({
  type: UPDATE_FILTER,
  value
})

export const addValue = (value) => ({
  type: ADD_VALUE,
  value
})

export const removeValue = (value) => ({
  type: REMOVE_VALUE,
  value
})
