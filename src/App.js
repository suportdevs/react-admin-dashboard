import './App.css';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import UserList from './components/UserList/UserList';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <UserList />,
        },
      ]
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
      {/* <TopBar />
      <div className='container'>
        <Sidebar/>
        <div className="mainContentWrapper">
          <Home />
        </div>
      </div> */}

    </>
  );
}

export default App;
