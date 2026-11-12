// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import "./App.css";
// import Footer from "./layout/Footer";
// import Header from "./layout/Header";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/auth/Login";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
       
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'

const App = () => {
  return (
    <>
    <RouterProvider router={Routes}/>
    </>
  )
}

export default App
