import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Sign_Up from "./components/Sign_Up";
import Login from "./components/Login";
import User from "./components/User";
import UserList from "./components/UserList";
import ProductState from "./context/ProductState";
import CartItems from "./components/CartItems";
import AddProduct from "./components/AddProduct";
import { ToastContainer } from "react-toastify";
import Toast from "./ToastComponent/Toast";
import Profile from "./components/Profile";
import SearchResult from "./components/SearchResult";

// import ThemeProvider from './ContextAPI/ThemeProvider'
// import Context from './ContextAPI/context'

// const App = () => {
//   return (
//     <>
//       <ProductState>
//           <Router>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about_us" element={<About_Us />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/sign_up" element={<Sign_Up />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/:user_Id/:userName" element={<User />} />
//               <Route path="/user" element={<UserList />} />
//               you can wrap the FakeApi component inside the UserProvider component like this:
//               <Route path="/api" element={<UserProvider> <FakeApi /> </UserProvider>} />
//             </Routes>
//           </Router>
//       </ProductState>
//       <br />
//       {/* <hr style={{height:'3px',color:'dark'}} />
//       <ThemeProvider>
//         <Context />
//       </ThemeProvider> */}
//     </>
//   );
// }

const App = () => {
  return (
    <ProductState>
      <Router>
        <Navbar />
        <Toast />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign_up" element={<Sign_Up />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:user_Id/:userName" element={<User />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/cart_items" element={<CartItems />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/search/:searchQuery" element={<SearchResult />} />
        </Routes>
      </Router>
    </ProductState>
  );
};

export default App;
