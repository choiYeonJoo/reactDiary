import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./slices/auth/authSlice";

//리듀서들을 묶은 rootReducer 얻기
const rootReducer = combineReducers({
  //속성명은 상태 선택 함수에서 rootState로 접근할 때 사용됨
  auth: authReducer
});

//redux-persist 설정하기
//redux-persist failed to create sync storage. falling back to noop storage 메시지 출력 이유
//  - Next.js에서 서버 사이드에서 window가 없는 상태에서 localstorage에 접근하려고 했기 때문
//  - redux-persist 내부적으로 서버 사이드에서 가상의 noop storage 사용한다는 것이므로 문제 없음
const persistConfig = {
  //로컬스토리지 키 이름: persist:front-end
  key: "front-end",
  //로컬스토리지 사용
  storage,
  //로컬 스토리지에 저장하고 싶은 리듀스 이름(combineReducers()에서 추가한 속성명)
  whitelist: [ "auth" ]
};

//redux-persist 설정대로 로컬스토리지에 저장하는 persistedReducer 얻기
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store 내보내기
export const store = configureStore({
  reducer: persistedReducer,
  //@reduxjs/toolkit에서 A non-serializable value was detected in an action 에러가 나지 않도록 추가
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

//persistor 내보내기
export const persistor = persistStore(store);
