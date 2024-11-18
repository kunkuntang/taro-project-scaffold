import { Component, PropsWithChildren } from 'react'
import rootStore from '@/store'

import { AppStoreProvider } from './hooks'

import './app.less'

class App extends Component<PropsWithChildren>  {
  componentDidMount () {}

  componentDidShow () {
    rootStore.app.initialize()
  }

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <AppStoreProvider store={rootStore}>
        {this.props.children}
      </AppStoreProvider>
    )
  }
}

export default App
