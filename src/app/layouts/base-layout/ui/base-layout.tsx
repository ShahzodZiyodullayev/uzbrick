import { Outlet } from "react-router-dom";

import Header from "@/widgets/footer";
import Footer from "@/widgets/header";
import { SEO } from "@/shared/ui/SEO";

const BaseLayout = () => {
  return (
    <>
      <SEO />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
