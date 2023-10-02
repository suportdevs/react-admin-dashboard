import './App.css';
import Layout from './components/Layout/Layout';
import UserList from './pages/UserList/UserList';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserEdit from './pages/UserEdit/UserEdit';
import NewUser from './pages/NewUser/NewUser';


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
        {
          path: '/newUser',
          element: <NewUser />,
        },
        {
          path: '/user/:userId',
          element: <UserEdit />,
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
