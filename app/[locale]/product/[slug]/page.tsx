import ProductImageGallery from "@/app/[locale]/product/[slug]/components/ProductImageGallery";
import ProductInfo from "./components/ProductInfo";
import ProductTabs from "./components/ProductTabs";

// Define image data for the product
const productImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&crop=center",
    alt: "Wireless Headphones - Front View",
    width: 600,
    height: 600,
    thumbnailWidth: 150,
    thumbnailHeight: 150,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=center",
    alt: "Wireless Headphones - Side View",
    width: 600,
    height: 600,
    thumbnailWidth: 150,
    thumbnailHeight: 150,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&crop=center",
    alt: "Wireless Headphones - Worn View",
    width: 600,
    height: 600,
    thumbnailWidth: 150,
    thumbnailHeight: 150,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop&crop=center",
    alt: "Wireless Headphones - Charging Case",
    width: 600,
    height: 600,
    thumbnailWidth: 150,
    thumbnailHeight: 150,
  },
];

export const metadata = {
  title: "Product Page",
};

type Props = {
  params: Promise<{ slug: string }>;
};

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <ProductImageGallery images={productImages} discountPercentage={25} />

        {/* Product Info */}
        <ProductInfo title={slug} />
      </div>

      {/* Product Tabs */}
      <ProductTabs />

      {/* <div className="mt-16">
					<h2 className="text-2xl font-bold mb-8">Related Products</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
							<figure className="h-48 overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center"
									alt="Wireless Earbuds"
									width={400}
									height={400}
									className="w-full h-full object-cover hover:scale-105 transition-transform"
								/>
							</figure>
							<div className="card-body p-4">
								<h3 className="card-title text-sm">Wireless Earbuds Pro</h3>
								<div className="flex items-center gap-1 mb-2">
									<div className="rating rating-xs">
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
									</div>
									<span className="text-xs text-base-content/70">(89)</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-lg font-bold text-primary">
										$79.99
									</span>
									<span className="text-sm line-through text-base-content/50">
										$99.99
									</span>
								</div>
								<button className="btn btn-primary btn-sm mt-2">
									Add to Cart
								</button>
							</div>
						</div>

						<div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
							<figure className="h-48 overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center"
									alt="Gaming Headset"
									width={400}
									height={400}
									className="w-full h-full object-cover hover:scale-105 transition-transform"
								/>
							</figure>
							<div className="card-body p-4">
								<h3 className="card-title text-sm">Gaming Headset RGB</h3>
								<div className="flex items-center gap-1 mb-2">
									<div className="rating rating-xs">
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
									</div>
									<span className="text-xs text-base-content/70">(156)</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-lg font-bold text-primary">
										$59.99
									</span>
									<span className="text-sm line-through text-base-content/50">
										$79.99
									</span>
								</div>
								<button className="btn btn-primary btn-sm mt-2">
									Add to Cart
								</button>
							</div>
						</div>

						<div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
							<figure className="h-48 overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop&crop=center"
									alt="Bluetooth Speaker"
									width={400}
									height={400}
									className="w-full h-full object-cover hover:scale-105 transition-transform"
								/>
							</figure>
							<div className="card-body p-4">
								<h3 className="card-title text-sm">
									Portable Bluetooth Speaker
								</h3>
								<div className="flex items-center gap-1 mb-2">
									<div className="rating rating-xs">
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
									</div>
									<span className="text-xs text-base-content/70">(203)</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-lg font-bold text-primary">
										$49.99
									</span>
									<span className="text-sm line-through text-base-content/50">
										$69.99
									</span>
								</div>
								<button className="btn btn-primary btn-sm mt-2">
									Add to Cart
								</button>
							</div>
						</div>

						<div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
							<figure className="h-48 overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
									alt="USB-C Cable"
									width={400}
									height={400}
									className="w-full h-full object-cover hover:scale-105 transition-transform"
								/>
							</figure>
							<div className="card-body p-4">
								<h3 className="card-title text-sm">Premium USB-C Cable</h3>
								<div className="flex items-center gap-1 mb-2">
									<div className="rating rating-xs">
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
									</div>
									<span className="text-xs text-base-content/70">(432)</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-lg font-bold text-primary">
										$19.99
									</span>
									<span className="text-sm line-through text-base-content/50">
										$24.99
									</span>
								</div>
								<button className="btn btn-primary btn-sm mt-2">
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div> */}
    </main>
  );
};

export default ProductPage;
