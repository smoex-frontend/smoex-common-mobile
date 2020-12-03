import * as React from 'react'
import styles from './styles/Modal.module.scss'
import {
  enhancePopupComponent,
  usePopupShown,
  Modal,
  useModalStatus,
  useModalClose,
  transformStyles,
} from '@react-kits/dom'

const cx = transformStyles(styles)

export const TConfirmModal: React.FC<any> = (props) => {
  const { uuid, children, onConfirm } = props
  const { shown } = useModalStatus(uuid)
  const [ onHide, onClose ] = useModalClose(uuid)
  const onConfirmClick = () => {
    onConfirm?.()
    onHide()
  }
  return (
    <Modal uuid={uuid}>
      <div className={cx('confirm-modal', { shown })} onTransitionEnd={onClose}>
        {/* <div onClick={() => onClose()}>{` `}</div> */}
        {children}
        <div className={cx('confirm-btn')} onClick={onConfirmClick}>
          CONFIRM
        </div>
      </div>
    </Modal>
  )
}
export const ConfirmModal = enhancePopupComponent(TConfirmModal)
export default ConfirmModal
