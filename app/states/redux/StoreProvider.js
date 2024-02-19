//무조건 클라이언트 컴포넌트로 만들어야 함
'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({ children }) {
  const storeRef = useRef() //돔 참조할 때 사용했는데, 정확한 의미는 객체를 참조한다는 의미. 랜더링 이후에 해당 훅이 실행되므로, 랜더링 이후에 어떤 객체를 참조해야 할 때 사용하기도 함.
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store
  }

  return (
    <Provider store={storeRef.current}>
        {/* Redux: redux-persist 적용 */}
        {/* loading: 리덕스와 스토리지가 동기화 될 동안 표시될 컴포넌트를 지정 ex)loading={<Logo/>}*/}
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
    </Provider>
  );
}