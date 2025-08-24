import { Box } from "@mantine/core";

import Hero from "@/widgets/hero";
import Clients from "@/widgets/clients";
import Products from "@/widgets/products";
import Stats from "@/widgets/stats";
import Partnership from "@/widgets/partnership";
import About from "@/widgets/about";
import Logistics from "@/widgets/logistics";
import FooterHightlight from "@/widgets/footer-hightlight";

const Home = () => {
  return (
    <Box mih={630}>
      <Hero />
      <Clients />
      <Products />
      <Stats />
      <Partnership />
      <About />
      <Logistics />
      <FooterHightlight />
    </Box>
  );
};

export default Home;
