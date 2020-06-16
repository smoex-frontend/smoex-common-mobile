import * as React from 'react'
import styles from './styles/Modal.module.scss'
import { DrawerModal } from '../components/DrawerModal'
import {
  usePopupShown,
  transformStyles,
  Modal,
  useModalStatus,
} from 'react-dom-basic-kit'

const cx = transformStyles(styles)

export const TipsModal: React.FC<any> = (props) => {
  const { children, uuid } = props
  const { shown } = useModalStatus(uuid)
  return (
    <Modal uuid={uuid} blankClose={true}>
      <div className={cx('tips-modal', { shown })}>{children}</div>
    </Modal>
  )
}
export default TipsModal
