// import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

// const userErrorsReducer = (oldState={}, action) => {
//   Object.freeze(oldState);
//   const nextState = Object.assign({}, oldState);

//   switch(action.type) {
//     case RECEIVE_CURRENT_USER:
//       return [];
//     default:
//       return oldState;
//   }
// }

// export default userErrorsReducer;


// import { 
//   RECEIVE_USER
// } from "../../actions/user_actions";

// const rootReducer = combineReducers({
//   entities: combineReducers({
//     users: usersReducer
//   }),
//   errors: combineReducers({
//     user: userErrorsReducer,
//     session: sessionErrorsReducer
//   }),
//   session: sessionReducer
// });