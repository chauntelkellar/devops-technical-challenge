
import React from 'react'
import ReactDOM from 'react-dom'

import Main from './src/app/Main'

const container = document.querySelector('#app')

const App = () => (
  <>
    <Main />
  </>
)

ReactDOM.render(<App />, container)

