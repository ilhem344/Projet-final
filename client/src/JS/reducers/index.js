import { combineReducers } from "redux";
import { userReducer } from "./user";
import { vetReducer } from "./vet";
import { contactReducer } from "./listVet";
import { PostReducer } from "./post";
import { VetPostReducer } from "./VetPosts";
import { PubReducer } from "./pub";

export const rootReducer = combineReducers({
  userReducer,
  vetReducer,
  contactReducer,
  PostReducer,
  VetPostReducer,
  PubReducer,
});
