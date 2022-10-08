// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import { ProductsAndCardLoader } from './Loaders/ProductsAndCardLoader';



function App() {
  const router=createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>,
      },
      {
        path:'/order',
        loader: ProductsAndCardLoader,
        element:<Orders></Orders>
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      }, 
      {
     path:'/about',
      element:<About></About>
  }
    ]
  },
 
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
