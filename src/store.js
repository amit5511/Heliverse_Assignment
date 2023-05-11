
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import{composeWithDevTools} from 'redux-devtools-extension';

import { loaduserReducer, teamReducer, userReducer } from './Component/Reducer/Userreducer';

const reducer=combineReducers({
       user:userReducer,
       users:loaduserReducer,
       teams:teamReducer
   
})

const middleware =[thunk];
const store =createStore(
    reducer,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default store;