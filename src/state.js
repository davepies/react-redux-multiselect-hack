// I am a redux duck :)
// As mentioned in the interview - putting it all in one file, following this suggestion:
// https://github.com/erikras/ducks-modular-redux

// Actions
const UPDATE_FILTER = 'multiselect/UPDATE_FILTER'
const SHOW_VALUES = 'multiselect/SHOW_VALUES'
const HIDE_VALUES = 'multiselect/HIDE_VALUES'

const initialState = {
  filter: '',
  values: ['Han', 'Luke', 'Lea', 'Chewbacca'],
  filteredValues: [],
  showValues: false
}

// Reducer
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_VALUES:
      return {
        ...state,
        showValues: true
      }
    case HIDE_VALUES:
      return {
        ...state,
        showValues: false
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

export const showValues = () => ({
  type: SHOW_VALUES
})

export const hideValues = () => ({
  type: HIDE_VALUES
})
