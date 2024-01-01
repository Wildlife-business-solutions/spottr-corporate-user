import { combineReducers } from "redux";
import authorizeReducer from "./authorize/authorizeReducer";
import registrationReducer from "./registration/registrationReducer";
import dashboardCategoriesReducer from "./dashboardCategory/dashboardCategoryReducer";
import savedItemReducer from "./savedItem/savedItemReducer";
import corporateProductReducer from "./corporateProduct/corporateProductReducer";
import dashboardDataReducer from "./dashboardData/dashboardDataReducer";
import corporateUserDetailsReducer from "./corporateUserDetails/corporateUserDetailsReducer";
import messageReducer from "./messages/messageReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  //  todos: todosReducer,
  //  visibilityFilter: visibilityFilterReducer
  //   corporateProduct:corporateProduct
  authorize: authorizeReducer,
  dashboardCategories: dashboardCategoriesReducer,
  registraion: registrationReducer,
  savedItem: savedItemReducer,
  corporateProduct: corporateProductReducer,
  dashboardData: dashboardDataReducer,
  corporatUserDetails: corporateUserDetailsReducer,
  messageDetails: messageReducer,
});

export default rootReducer;
