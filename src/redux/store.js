import { configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { reducer as userReducer} from "./userSlice";
import cardButtonUpdateReducer from "./cardButtonUpdate";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["error"],
  timeout: 60 * 60 * 1000,
};

const rootReducer = {
  users: persistReducer(persistConfig, userReducer),
  cardButtonUpdate: cardButtonUpdateReducer,
  
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
