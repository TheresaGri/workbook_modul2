import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
