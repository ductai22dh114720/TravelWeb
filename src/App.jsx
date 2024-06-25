import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetail from "./pages/BlogsDetail";
import PlaceRoute from "./pages/PlaceRoute";
import NoPages from "./pages/NoPages";
const App= () => {
  return( <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}> 
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogsDetail />} />
      <Route path="/place" element={<PlaceRoute />} />
      <Route path="*" element={<NoPages />}/>
    </Route>
    </Routes>
    </BrowserRouter>
  </>
  );
};
export default App