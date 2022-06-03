import React from "react";
import "./style.css";
import { CartoonList } from "./pages/CartoonList";
import MyComponent from "./constants/GoogleAPI/APIGoogle";

export const App = () => {
  return (
    <>
      <CartoonList />
      <div className="map">
        <MyComponent />
      </div>
    </>
  );
};
