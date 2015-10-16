/* @flow */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleWare = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initialState: Object): Object {
  return createStoreWithMiddleWare(rootReducer, initialState)
}
