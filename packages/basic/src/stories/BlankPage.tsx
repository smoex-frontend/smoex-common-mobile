import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { configureStore } from '@react-kits/redux'
import { useModal } from '@react-kits/dom'
import { userSlice } from '@smoex-logic/user'
import { Provider } from 'react-redux'
import ConfirmModal from '../components/ConfirmModal'
import PageContainer from '../containers/PageRouter'


const store = configureStore({
  injector: userSlice.injector,
})

// window['store'] = store

const HomePage = () => {
  const modal = useModal(ConfirmModal)
  return (
    <section>
      <div onClick={modal.show}>show confirm</div>
      <Link to="/notfound">to notfound</Link>
      <div style={{ height: 3000 }}>For Scroll</div>
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
      <PageContainer>
        <Route path="/" component={HomePage} />
      </PageContainer>
    </Provider>
  )
}
