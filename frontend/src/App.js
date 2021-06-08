import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//importing screens
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";
import Login from "./Screens/login/Login";
// components
import Navbar from "./components/Navbar/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Sidedrawer from "./components/Sidedrawer/Sidedrawer";
import Register from "./components/Register/Register";

function App() {
  const [sideMenuToggle, setSideMenuToggle] = useState(false);
  // console.log(sideMenuToggle); testing
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar click={() => setSideMenuToggle(true)} />
      {/* Sidedrawer */}
      <Sidedrawer
        show={sideMenuToggle}
        click={() => setSideMenuToggle(false)}
      />
      {/* Backdrop */}
      <Backdrop show={sideMenuToggle} click={() => setSideMenuToggle(false)} />

      <main>
        <Switch>
          <Route exact path="/products" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
      <Footer />
      {/*  */}
    </div>
  );
}

export default App;
