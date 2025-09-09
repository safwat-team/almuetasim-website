import ProductCard from "@/app/[locale]/(home)/components/ProductCard";

const products = [
  {
    id: 1,
    name: "سماعات لاسلكية",
    slug: "wireless-earbuds",
    price: 99.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    category: "إلكترونيات",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "ساعة ذكية",
    slug: "smart-watch",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    category: "إلكترونيات",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: "قميص قطني مميز",
    slug: "leather-jacket",
    price: 29.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    category: "أزياء",
    rating: 4.3,
    reviews: 256,
  },
  {
    id: 4,
    name: "ماكينة قهوة",
    slug: "coffee-machine",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=center",
    category: "منزل",
    rating: 4.6,
    reviews: 174,
  },
  {
    id: 5,
    name: "حذاء رياضي",
    slug: "sport-shoes",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    category: "رياضة",
    rating: 4.4,
    reviews: 203,
  },
  {
    id: 6,
    name: "حامل لابتوب",
    slug: "laptop-bag",
    price: 39.99,
    originalPrice: 54.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    category: "إلكترونيات",
    rating: 4.2,
    reviews: 95,
  },
  {
    id: 7,
    name: "جاكيت دينم",
    slug: "denim-jacket",
    price: 69.99,
    originalPrice: 89.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
    category: "أزياء",
    rating: 4.5,
    reviews: 167,
  },
  {
    id: 8,
    name: "حصيرة يوغا",
    slug: "yoga-pants",
    price: 24.99,
    originalPrice: 34.99,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
    category: "رياضة",
    rating: 4.8,
    reviews: 312,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-16 ">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        id="products-grid"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
