import * as React from 'react'
import { FullScreenModal } from '../components/FullScreenModal'
import styles from './styles/LoginModal.module.scss'
import {
  useToggleToast,
  useToastError,
  useModal,
  transformStyles, useFormContext,
  enhanceFormComponent,
} from '@react-kits/dom'
import { useAsyncCallback } from '@react-kits/redux'
import { accountAsyncAction, userSlice, accountSelector } from '@smoex-logic/user'
import { LoginFormInput } from './LoginModal'
import { ConfirmModal } from '../components/ConfirmModal'

const cx = transformStyles(styles)

const TRegisterForm: React.FC<any> = (props) => {
  const { toLogin, callback } = props
  const { data } = useFormContext()

  const toggleToast = useToggleToast()

  const modal = useModal(({ uuid }) => (
    <ConfirmModal uuid={uuid}>
      Register success <br />
      Please complate your information.
    </ConfirmModal>
  ))

  const [sendCode, sendState] = userSlice.useAction(
    accountAsyncAction.sendCode,
  )
  const [verify, verifyState] = userSlice.useAction(
    accountAsyncAction.verifyCode,
  )
  const [account] = userSlice.useSelector(
    accountSelector.info
  )

  // const onRegistered = useCurrentCallback(() => {
  //   if (account.group === 'member') {
  //     toggleToast('already register so to login')
  //     callback()
  //   } else {
  //     modal.show()
  //   }
  // }, [account])

  const onRegister = useAsyncCallback(async () => {
    const { code } = data
    await verify(code, 'register')
    // onRegistered.current()
  }, [data, verify, account]) as any

  const onSendCode = useAsyncCallback(async () => {
    const { account } = data
    await sendCode(account, 'register')
  }, [sendCode, data]) as any

  useToastError(verifyState.error)
  useToastError(sendState.error)
  return (
    <form className={cx('login-form')}>
      <div className={cx('login-label')}>PHONE</div>
      <LoginFormInput name="account" />
      <div className={cx('login-label')}>VERIFY CODE</div>
      <LoginFormInput name="code">
        <div className={cx('login-send-code')} onClick={onSendCode}>
          SEND CODE
        </div>
      </LoginFormInput>
      <div className={cx('login-back')} onClick={toLogin}>
        Back To Login
      </div>
      <div className={cx('login-form-btn')} onClick={onRegister}>
        REGISTER{verifyState.loading && '...'}
      </div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
      <div className={cx('for-test-scroll')}>FOR TEST SCROLL</div>
    </form>
  )
}

export const RegisterForm = enhanceFormComponent(TRegisterForm)
export default RegisterForm
