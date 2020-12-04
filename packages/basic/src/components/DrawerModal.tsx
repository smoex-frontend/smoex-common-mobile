import * as React from 'react'
import styles from './styles/Modal.module.scss'
import { 
  IPopupProps, 
  useModalClose, 
  useModalStatus, 
  enhancePopupComponent, 
  transformStyles, 
  cloneModalContent,
} from '@react-kits/dom'

const cx = transformStyles(styles)

type IDrawerModalProps = IPopupProps & {
  uuid: string,
  children: React.ReactElement,
  rel: string,
}

export function getOffsetTop(nodeId: string) {
  const headerNode = document.getElementById(nodeId)
  if (headerNode) {
    const { bottom } = headerNode.getBoundingClientRect()
    return bottom
  }
  return 0
}

const TDrawerModal: React.FC<IDrawerModalProps> = (props) => {
  const { uuid, children, rel } = props
  const [offsetTop, setOffetTop] = React.useState(0)
  const { shown } = useModalStatus(uuid)
  const [ onHide, onClose ] = useModalClose(uuid)

  React.useLayoutEffect(() => {    
    const top = getOffsetTop(rel)
    // safari 在滚动时, 由于地址栏收缩可能无法第一时间获取到正确到位置
    if (top >= 0) {
      setOffetTop(top)
      return
    }
    setTimeout(() => {
      const newTop = getOffsetTop(rel)
      setOffetTop(newTop)
    }, 10);
  })

  return (
    <div
      className={cx('dropdown-modal', { shown })}
      style={{ top: offsetTop }}
      onClick={onHide}
      onTransitionEnd={onClose}
    >
      {cloneModalContent(children)}
    </div>
  )
}

export const DrawerModal = enhancePopupComponent(TDrawerModal)
export default DrawerModal
