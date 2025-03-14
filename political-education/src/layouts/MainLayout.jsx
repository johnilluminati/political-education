import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 dark:text-white">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout;