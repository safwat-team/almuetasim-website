import React from "react";

const ProductsCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl card-hover w-80 hover-lift animate-fade-in-up">
      <figure className="relative overflow-hidden h-48">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center"
          alt="ساعة ذكية"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="badge badge-secondary absolute top-2 left-2 animate-pulse">
          تخفيض
        </div>
      </figure>
      <div className="card-body">
        <h3 className="card-title text-sm">ساعة ذكية</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="rating rating-sm">
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              disabled
            />
          </div>
          <span className="text-sm text-base-content/70">(89)</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">$199.99</span>
          <span className="text-sm line-through text-base-content/50">
            $249.99
          </span>
        </div>
        <div className="card-actions flex justify-center gap-2">
          <button className="btn btn-primary btn-sm flex-1 hover-scale">
            <i data-lucide="shopping-cart" className="w-4 h-4"></i>
            أضف إلى السلة
          </button>
          <button className="btn btn-ghost btn-sm btn-circle hover-scale">
            <i data-lucide="heart" className="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
