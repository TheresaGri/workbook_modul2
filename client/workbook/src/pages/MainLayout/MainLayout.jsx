import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <div className="homeDiv">
      <h1 className = "homeButton">
        <Link to="/" >Home</Link>
      </h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
