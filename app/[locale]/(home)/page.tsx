import ClientComponent from "./components/ClientComponent";
import ProductsCard from "@/lib/components/proCards";
import CategoryCards from "@/lib/components/CategoryCards";
import Newsletter from "./components/Newsletter";

const Home = async () => {
  return (
    <main className="bg-gradient-to-b from-base-200 to-base-100">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <ClientComponent />
        <CategoryCards />
        <ProductsCard />
        <Newsletter />
      </div>
    </main>
  );
};

export default Home;
