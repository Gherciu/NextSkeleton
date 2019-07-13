import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import reducer from '@store/reducer'

const initializeStore = (initialState = {}) => {
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  })
  const store = createStore(reducer, initialState, composeEnhancers())
  // Make reducers hot reloadable
  if (module.hot)
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer)
    })
  return store
}

export default initializeStore
