import React from 'react'
import MultiSelect from './containers/MultiSelect'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import MultiSelectReducer from './state'

const store = createStore(MultiSelectReducer);

const Root = (props) => (
  <Provider store={store}>
    <MultiSelect />
  </Provider>
)

export default Root
