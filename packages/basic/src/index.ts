import * as React from 'react'

export * from './containers/PageRouterContext'

// export * from './containers/Header'
// export * from './containers/Footer'
// export * from './containers/Controller'
// export * from './containers/Install'
// export * from './containers/PageError'
// export * from './containers/PageLoading'
// export * from './containers/PageRouter'

// export * from './components/Loading'
// export * from './components/ConfirmModal'
// export * from './components/DrawerModal'
// export * from './components/FullScreenModal'
// export * from './components/TipsModal'

// export * from './partials/LoginForm'
// export * from './partials/RegisterForm'
// export * from './partials/LoginModal'
// export * from './partials/MenuModal'



export const Header = React.lazy(() =>
  import('./containers/Header' /* webpackChunkName: "common" */),
)
export const Footer = React.lazy(() =>
  import('./containers/Footer' /* webpackChunkName: "common" */),
)
export const Controller = React.lazy(() =>
  import('./containers/Controller' /* webpackChunkName: "common" */),
)
export const Install = React.lazy(() =>
  import('./containers/Install' /* webpackChunkName: "common" */),
)
export const PageError = React.lazy(() =>
  import('./containers/PageError' /* webpackChunkName: "common" */),
)
export const PageLoading = React.lazy(() =>
  import('./containers/PageLoading' /* webpackChunkName: "common" */),
)
export const PageRouter = React.lazy(() =>
  import('./containers/PageRouter' /* webpackChunkName: "common" */),
)

export const Loading = React.lazy(() =>
  import('./components/Loading' /* webpackChunkName: "common" */),
)
export const ConfirmModal = React.lazy(() =>
  import('./components/ConfirmModal' /* webpackChunkName: "common" */),
)
export const DrawerModal = React.lazy(() =>
  import('./components/DrawerModal' /* webpackChunkName: "common" */),
)
export const FullScreenModal = React.lazy(() =>
  import('./components/FullScreenModal' /* webpackChunkName: "common" */),
)
export const TipsModal = React.lazy(() =>
  import('./components/TipsModal' /* webpackChunkName: "common" */),
)

// export const LoginModal = React.lazy(() =>
//   import('./partials/LoginModal' /* webpackChunkName: "common" */),
// )
// export const MenuModal = React.lazy(() =>
//   import('./partials/MenuModal' /* webpackChunkName: "common" */),
// )
