"use client";

import { useState } from "react";

type ProductInfoProps = {
  title: string;
};

const ProductInfo = ({ title }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-base-content/70 mb-4">
          Premium noise-canceling wireless headphones with 30-hour battery life
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="text-sm text-base-content/70">
            4.8 (247 reviews)
          </span>
          <span className="text-success text-sm font-medium">✓ In Stock</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-primary">$99.99</span>
          <span className="text-xl line-through text-base-content/50">
            $129.99
          </span>
          <span className="badge badge-secondary">Save $30</span>
        </div>
      </div>

      {/* Color Options */}
      <div>
        <h3 className="font-semibold mb-3">Color</h3>
        <div className="flex gap-2">
          <div className="form-control">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="color"
                className="radio radio-primary"
                defaultChecked
              />
              <span className="ml-2">Black</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="color"
                className="radio radio-primary"
              />
              <span className="ml-2">White</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="color"
                className="radio radio-primary"
              />
              <span className="ml-2">Blue</span>
            </label>
          </div>
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="font-semibold mb-3">Quantity</h3>
        <div className="flex items-center gap-3">
          <div className="join">
            <button className="btn join-item btn-sm" onClick={decreaseQty}>
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              className="input input-bordered join-item w-16 text-center input-sm"
              readOnly
            />
            <button className="btn join-item btn-sm" onClick={increaseQty}>
              +
            </button>
          </div>
          <span className="text-sm text-base-content/70">
            Only 5 left in stock!
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button className="btn btn-primary btn-lg w-full">Add to Cart</button>
        <div className="grid grid-cols-2 gap-3">
          <button className="btn btn-outline btn-lg">Wishlist</button>
          <button className="btn btn-outline btn-lg">Share</button>
        </div>
      </div>

      {/* Features */}
      <div className="border-t pt-6">
        <h3 className="font-semibold mb-3">Key Features</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-sm">Active Noise Cancellation</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-sm">30-hour battery life</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-sm">Bluetooth 5.0 connectivity</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-sm">
              Quick charge: 5 min = 3 hours playback
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
