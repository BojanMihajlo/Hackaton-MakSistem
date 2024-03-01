
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import RegisterPage from "./components/RegisterPage";
import { checkAuthLoader,getAuthEmailLogin,checkToHome  } from "./util/auth";
import AssetPlatforms from "./components/AssetPlatforms";
import Cryptocurrencies from "./components/Cryptocurrencies";
import MyCoins from "./components/MyCoins";



const router = createBrowserRouter([

  {
    path:"/",
    element: <RootLayout />,
    loader:getAuthEmailLogin,
    children:[
      {
       path:"/",
       element:<HomePage/>,
       loader:checkAuthLoader,
      },
    {
     path:"register",
     element:<RegisterPage/>,
     loader:checkToHome
    },
  
  {
    path:"login",
    element: <LoginPage/>,
    loader:checkToHome
  },
  {
    path:"asset",
    element:<AssetPlatforms/>,
    loader:checkAuthLoader,
   },
   {
    path:"cryptocurrencies",
    element:<Cryptocurrencies/>,
    loader:checkAuthLoader,
   },
   {
    path:"mycoins",
    element:<MyCoins/>,
    loader:checkAuthLoader,
   },
]}
])

function App() {

  return (
    <div className="App">

     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
