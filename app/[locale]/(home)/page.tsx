import Hero from "./components/Hero";
import Products from "@/app/[locale]/(home)/components/Products";
import CategoryCards from "@/lib/components/CategoryCards";
import Newsletter from "./components/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoryCards />
      <Products />
      <Newsletter />
    </main>
  );
};

export default Home;
