import * as React from 'react'
import { BroswerTypes } from '@basic-kits/dom'
import styles from './styles/App.module.scss'
import { transformStyles } from '@react-kits/dom'

const cx = transformStyles(styles)

export const Controller = () => {
  if (!BroswerTypes.isQQWebView) {
    return null
  }

  return (
    <div className={cx('controller')}>
      <div className={cx('controller-wrapper')}>
        <div
          className={cx('controller-btn')}
          onClick={() => window.history.back()}
        >
          {`<`}
        </div>
        <div
          className={cx('controller-btn')}
          onClick={() => window.history.forward()}
        >
          {`>`}
        </div>
      </div>
    </div>
  )
}

export default Controller
