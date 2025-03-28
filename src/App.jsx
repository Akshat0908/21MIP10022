import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Header from "./components/Header";
// import { registerCompany } from "./api/register";
function App() {


// registerCompany()
//   .then((data) => console.log("Registration Response:", data))
//   .catch((err) => console.error(err));

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
