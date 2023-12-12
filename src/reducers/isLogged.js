import { unstable_renderSubtreeIntoContainer } from "react-dom";

const loggedReducer = (state = false, action) => {
   switch(action.type) {
      case 'SIGN_IN':
         return !state;
      default:
        return state;
   }
};

export default loggedReducer;