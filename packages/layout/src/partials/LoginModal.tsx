import * as React from 'react'
import { FullScreenModal } from '../components/FullScreenModal'
import styles from './styles/LoginModal.module.scss'
import {
  useModal,
  useToggleToast,
  useFormContext,
  Input,
} from 'react-dom-basic-kit'
import { transformStyles } from 'react-dom-basic-kit'
// import { LoginForm } from './LoginForm'
// import { RegisterForm } from './RegisterForm'
import { ConfirmModal } from '../components/ConfirmModal'

const LoginForm = React.lazy(() =>
  import('./LoginForm' /* webpackChunkName: "login" */),
)
const RegisterForm = React.lazy(() =>
  import('./RegisterForm' /* webpackChunkName: "register" */),
)

const cx = transformStyles(styles)

export const LoginFormInput: React.FC<any> = (props) => {
  const { name, children, defaultValue } = props
  const { data, update } = useFormContext()
  const onChange = React.useCallback(
    (target: HTMLInputElement) => {
      update({ [name]: target.value })
    },
    [name],
  )
  React.useEffect(() => {
    if (defaultValue) {
      update({ [name]: defaultValue })
    }
  }, [])

  return (
    <div className={cx('login-input-wrapper')}>
      <Input
        className={cx('login-input')}
        value={data[name] || ''}
        onChange={onChange}
      />
      {children}
    </div>
  )
}

export const LoginModal: React.FC<any> = (props) => {
  const [form, setForm] = React.useState('login')
  const onCloseModal = () => {
    props.onClose()
  }
  const modal = useModal((uuid: any) => (
    <ConfirmModal uuid={uuid} onConfirm={() => console.log(46546454)}>{`test`}</ConfirmModal>
  ))
  const toggleToast = useToggleToast()
  const toggleMessage = () => {
    toggleToast('test')
  }
  return (
    <FullScreenModal uuid={props.uuid} onClose={onCloseModal}>
      <div className={cx('login-modal')}>
        <div className={cx('login-modal-logo')}>SMOEX</div>
        {form === 'login' && (
          <LoginForm
            toRegister={() => setForm('register')}
            callback={onCloseModal}
          />
        )}
        {form === 'register' && (
          <RegisterForm
            toLogin={() => setForm('login')}
            callback={onCloseModal}
          />
        )}
        <br />
        <div onClick={modal.show}>TEST CONFIRM</div>
        <br />
        <div onClick={toggleMessage}>TEST TOAST</div>
      </div>
    </FullScreenModal>
  )
}
