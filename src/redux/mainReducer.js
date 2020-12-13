import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21184805Reducer from '../features/SignIn21184805/redux/reducers'
import SignUp22184804Reducer from '../features/SignUp22184804/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21184805: SignIn21184805Reducer,
SignUp22184804: SignUp22184804Reducer,

});