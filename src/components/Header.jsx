import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="logo">
              <Link to="/">
                <h1 className="text-3xl font-medium">
                  Dev<span className="text-green-500">Quiz</span>
                </h1>
              </Link>
            </div>
            <div className="nav_link">
              <nav className="flex sm:justify-center space-x-4">
                {[
                  ["Topics", "/topics"],
                  ["Statistics", "/statistics"],
                  ["Blogs", "/blogs"],
                ].map(([title, url]) => (
                  <NavLink
                    to={url}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-lg px-3 py-2 font-medium bg-slate-100 text-slate-900"
                        : "rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    }
                  >
                    {title}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
