import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Q Search</h1>
      <nav className="flex gap-4">
        <Link to="/">Feed</Link>
        <Link to="/top-users">Top Users</Link>
        <Link to="/trending-posts">Trending Posts</Link>
      </nav>
    </header>
  );
}

export default Header;
