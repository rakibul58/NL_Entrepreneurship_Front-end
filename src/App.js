import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
// import Home from "./Pages/Home/Home";
import Call from "./Pages/Call/Call";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<HomePage/>
          },
          {
            path:'/call',
            element:<PrivateRoute><Call/></PrivateRoute>
          },
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/register',
            element:<Register/>
          }
        ]
      }
  ]);
  return (
    <div className='max-w-screen-xl mx-auto' style={{minHeight:"100vh"}}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster/>
    </div>
  );
}

export default App;
