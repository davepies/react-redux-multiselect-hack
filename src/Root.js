import React from 'react'
import MultiSelectContainer from './containers/MultiSelectContainer'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import MultiSelectReducer from './state'

const store = createStore(MultiSelectReducer);

const Root = (props) => (
  <Provider store={store}>
    <MultiSelectContainer />
  </Provider>
)

export default Root
