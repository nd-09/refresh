import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderGoGreen from "./components/HeaderGoGreen.js";
import AboutUs from "./pages/AboutUs.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ConatactUs from "./pages/ContactUs.js";
import Footer from "./components/Footer.js";
import GoGreenBody from "./components/GoGreenBody.js";
import RestaurantDetails from "./components/RestaurantDetails.js";
import UserContext from "./utils/helpers/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore.js";
{
  /* this is your react element */
}
const elem = <h2>I am react element</h2>;
const Head = () => (
  <h1 className="child">Component composition using React Components</h1>
);
{
  /* And this is a react component */
}
const HeaderComponent = () => (
  <>
    <h1 className="parent">This is a React Functional component</h1>
    <Head />
    Haven't use this way of calling a react component(see the console) something
    that i didn't knew prior Now I know I know! ONE LEARNS NEW THING EVERYDAY.
    {console.log("{ Head() },", "One way to call react component")}
    {Head()}
    {elem}
  </>
);
const BuyandGrow = lazy(() => {
  return import("./pages/BuyandGrow.js");
});
const Cart = lazy(() => {
  return import("./pages/Cart.js");
});
const GoGreenComponent = () => {
  const [user, setUser] = useState("Default user");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: user, setUser }}>
        <HeaderGoGreen />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <GoGreenComponent />,
    children: [
      {
        path: "/",
        element: <GoGreenBody />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ConatactUs />,
      },
      {
        path: "/details/:restaurant_id",
        element: <RestaurantDetails />,
      },
      {
        path: "/buyAndPlant",
        element: (
          <Suspense
            fallback={
              <h1>
                Just a display of dynamic bundling using lazy loading/On demand
                loading/Dynamic Bundling
              </h1>
            }
          >
            <BuyandGrow />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>IS LAZY LOADED</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={createRouter} />);
