import * as React from 'react'
import styles from './styles/Modal.module.scss'
import {
  enhancePopupComponent,
  useModalClose,
  useModalStatus,
  transformStyles,
} from '@react-kits/dom'
import { PageLoading } from '../containers/PageLoading'
import { Loading } from './Loading'

const cx = transformStyles(styles)

export function usePopupOverlayClose(shown: boolean, onClose: () => void) {
  const [overlay, setOverlay] = React.useState(true)
  React.useEffect(() => {
    const popupLayerNode = document.getElementById('PopupLayer')
    if (popupLayerNode) {
      if (overlay) {
        popupLayerNode.style.zIndex = '2'
      } else {
        popupLayerNode.style.zIndex = ''
      }
    }
  }, [overlay])
  return React.useCallback(() => {
    if (!shown && onClose) {
      setOverlay(false)
      setTimeout(onClose)
    }
  }, [shown])
}

const TFullScreenModal: React.FC<any> = (props: any) => {
  const { uuid, children } = props
  const { shown } = useModalStatus(uuid)
  const [ onHide, onClose ] = useModalClose(uuid)
  const onOverlayClose = usePopupOverlayClose(shown, onClose)

  return (
    <div
      className={cx('full-screen-modal', { shown })}
      onTransitionEnd={onOverlayClose}
    >
      <div className={cx('full-screen-header')} onClick={onHide}>
        X
      </div>
      <div className={cx('full-screen-content')}>
        <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
      </div>
    </div>
  )
}
export const FullScreenModal = enhancePopupComponent(TFullScreenModal)
export default FullScreenModal

const TMessageSModal: React.FC<any> = (props: any) => {
  const { isOpen, onClose } = props
  return (
    <div className={cx('full-screen-modal')}>
      <div onClick={() => onClose()}>CLOSESS2222222</div>
      {props.children}
    </div>
  )
}
export const MessageModal = enhancePopupComponent(TMessageSModal)
