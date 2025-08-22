import { Outlet } from "react-router-dom";
import Header from "@/widgets/footer";
import Footer from "@/widgets/header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
