import * as React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { useAsyncCallback } from '@react-kits/redux'
import { accountAsyncAction, userSlice } from '@smoex-logic/user'
import { Footer } from './Footer'
import { PageError } from './PageError'
import { PageLoading } from './PageLoading'
import { Install } from './Install'
import { Controller } from './Controller'
import { useToastError, AppContainer, useModalCloseAll } from '@react-kits/dom'
import { DEFALUT_PAGE_PROPS, PageContext } from './PageRouterContext'
import { initWindowHeight, BroswerTypes } from '@basic-kits/dom'

function useInitLoading() {
  const [getInfo, infoState] = userSlice.useAction(accountAsyncAction.getInfo)
  const [loading, setLoading] = React.useState(true)
  const onGetInfo = useAsyncCallback(async () => {
    await getInfo()
    setLoading(false)
  }) as any
  React.useEffect(() => {
    if (infoState.error) {
      setLoading(false)
    }
  }, [infoState.error])

  useToastError(infoState.error)

  React.useEffect(() => {
    onGetInfo()
  }, [])
  return loading
}

export const PageRouter: React.FC<any> = (props) => {
  const { children } = props
  const [pageProps, setPageProps] = React.useState(DEFALUT_PAGE_PROPS)
  const closeAllModal = useModalCloseAll(500)
  const loading = useInitLoading()
  const { pathname } = useLocation()
  const [pageContext, setPageContext] = React.useState<any>({
    setPageProps: (pageProps: any) =>
      setPageProps((mProps: any) => ({ ...mProps, ...pageProps })),
    pageProps: DEFALUT_PAGE_PROPS,
  })


  React.useEffect(() => {
    initWindowHeight('root')
    closeAllModal()
  }, [pathname])
  console.log(pathname)
  
  React.useEffect(() => {
    setPageContext((mProps: any) => ({ ...mProps, pageProps }))
  }, [pageProps])

  const { showHeader, showFooter, showInstall } = pageProps
  return (
    <PageContext.Provider value={pageContext}>
      {showInstall && <Install />}
      {showHeader && <Header />}
      {loading ? (
        <PageLoading />
      ) : (
        <React.Suspense fallback={<PageLoading />}>
          <Switch>
            {false ? <PageError code={500} /> : children}
            <Route render={() => <PageError code={404} />} />
          </Switch>
          {showFooter && <Footer />}
        </React.Suspense>
      )}
      {!loading && <Controller />}
    </PageContext.Provider>
  )
}

export const PageContainer: React.FC = props => {
  return (
    <AppContainer>
      <PageRouter>{props.children}</PageRouter>
    </AppContainer>
  )
}
export default PageContainer
