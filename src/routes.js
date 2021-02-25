import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Search from './pages/Search'
import Result from './pages/Result'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Search} />
      <Route path="/ws/:cep" component={Result} />
    </BrowserRouter>
  )
}
