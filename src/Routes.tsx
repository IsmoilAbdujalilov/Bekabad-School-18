import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

const Routes = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Routes;