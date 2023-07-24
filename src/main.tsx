import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'
import './index.scss'

import mock from './mocks/products.mock.json'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import ProductsCard from './pages/ProductsCard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/sultan" element={<Home />} />
      <Route path="/sultan/cart" element={<Cart />} />
      <Route path="/sultan/catalog/" element={<Catalog catalog={mock.catalog} category={mock.categories[0]} />} />
      <Route path="/sultan/products/:productId" element={<ProductsCard products={mock.catalog} />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
