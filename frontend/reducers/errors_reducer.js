import { combineReducers } from 'redux';
import profileErrorsReducer from './profile_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  profile: profileErrorsReducer
})

export default errorsReducer;