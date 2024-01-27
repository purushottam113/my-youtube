import './App.css';
import React from 'react';
import Body from './Components/Body';
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import WatchPage from './Components/WatchPage';
import MainContainer from './Components/MainContainer';
import { Provider } from 'react-redux';
import store from './utils/store';
import SearchContainer from './Components/SearchContainer';
import Basic from './Components/LoginForm';

const createRouter = createBrowserRouter([{
  Path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path: "results",
      element: <SearchContainer />
    },
    {
      path: "login",
      element: <Basic />
    },
  ]
}])

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={createRouter}/>
      </Provider>
  );
}

export default App;



/**
 * Header
 *    - menu icon
 *    - logo
 *    - searchbar and search button
 *    - profile
 * 
 * Body
 *  - SideBar
 *      -list
 *
 *  - Main-Conatiner
 *    - Button list
 *    - Video Container
 *        - Video Cards 
 * 
 */