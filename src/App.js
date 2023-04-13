import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
// import Home from "./Pages/Home/Home";
import Call from "./Pages/Call/Call";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import HomePage from "./Pages/HomePage/HomePage";
import Dashboard from "./layout/Dashboard";
import Profile from "./Pages/Dashboard/Profile";
import AdminDashboard from "./layout/AdminDashboard";
import AddScore from "./Pages/Dashboard/AddScore";
import ScorePanel from "./Pages/Dashboard/ScorePanel";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/call',
          element: <PrivateRoute><Call /></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard',
          element: <PrivateRoute><Profile/></PrivateRoute>
        },
        {
          path: '/dashboard/score-panel',
          element: <PrivateRoute><ScorePanel/></PrivateRoute>
        },
       
        
      ]
    },
    {
      path: '/admin-dashboard',
      element: <AdminDashboard/>,
      children: [
        {
          path: '/admin-dashboard',
          element: <PrivateRoute><Profile/></PrivateRoute>
        },
        {
          path: '/admin-dashboard/add-score',
          element: <PrivateRoute><AddScore/></PrivateRoute>
        },
        
      ]
    },
  ]);
  return (
    <div className='max-w-screen-xl mx-auto' style={{ minHeight: "100vh" }}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
