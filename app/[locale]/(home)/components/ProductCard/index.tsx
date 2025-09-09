import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    originalPrice: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, originalPrice, image, rating, reviews } = product;

  const renderRatingStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <input
        key={i}
        type="radio"
        className="mask mask-star-2 bg-orange-400"
        checked={i < Math.floor(rating)}
        disabled
      />
    ));
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="card group bg-base-100 shadow-xl card-hover">
        <figure className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {originalPrice > price && (
            <div className="badge badge-secondary absolute top-2 left-2">
              تخفيض
            </div>
          )}
        </figure>
        <div className="card-body">
          <h3 className="card-title text-sm">{name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <div className="rating rating-sm">{renderRatingStars()}</div>
            <span className="text-sm text-base-content/70">({reviews})</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-primary">${price}</span>
            {originalPrice > price && (
              <span className="text-sm line-through text-base-content/50">
                ${originalPrice}
              </span>
            )}
          </div>
          {/* <div className="card-actions">
					<button className="btn btn-primary btn-sm flex-1">
						<i data-lucide="shopping-cart" className="w-4 h-4"></i>
						أضف إلى السلة
					</button>
					<button className="btn btn-ghost btn-sm btn-circle">
						<i data-lucide="heart" className="w-4 h-4"></i>
					</button>
				</div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
