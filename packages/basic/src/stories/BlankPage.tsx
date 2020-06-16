import * as React from 'react'
import { Route } from 'react-router-dom'
import { configureStore } from 'redux-async-kit'
import { AppContainer, Modal } from 'react-dom-basic-kit'
import { PageRouter } from '../containers/PageRouter'
import { userSlice, commonReducer } from '@smoex-business/user'
import { Provider } from 'react-redux'
// import { homeSlice } from 'common/slices/home'
import { createLazyComponent } from 'redux-async-kit'
import { PageLoading } from '../containers/PageLoading'


const store = configureStore({
  injector: userSlice.injector,
  reducers: commonReducer,
})

// window['store'] = store

const HomePage = () => {
  return (
    <section>
      <PageLoading />
    </section>
  )
}


export const ToggleModalComponent = () => {
  return (
    <div>
      13216456456
      {/* <div className={cx('test')} onClick={onOpen}>
        Toggle Dialog Modal
      </div>
      <div className={cx('test')} onClick={modal2.show}>
        Toggle Dialog Modal2
      </div>
      <div className={cx('test')} onClick={onClose}>
        Close
      </div> */}
      {/* <div className={cx('test')} onClick={toggleModal}>
        Toggle Dialog Modal
      </div>
      <ThemeingText />
      <div onClick={toDark}>Toggle Dialog Modal</div>
      <div onClick={clearTheme}>Toggle Dialog Modal</div> */}
    </div>
  )
}

export const ToggleModal: any = (p: any) => {
  return (
    <div>123456</div>
  )
}

export const BlankPage: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <PageRouter>
          <Route path="/" component={HomePage} />
        </PageRouter>
      </AppContainer>
    </Provider>
  )
}
