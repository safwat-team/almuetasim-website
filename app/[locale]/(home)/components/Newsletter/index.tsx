import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-200 py-16 text-black animate-fade-in-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 animate-slide-in-left">
          ابقوا على اطلاع
        </h2>
        <p className="text-lg mb-8 animate-slide-in-right">
          احصل على أحدث العروض والمنتجات الجديدة مباشرة في بريدك الإلكتروني
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="input input-bordered flex-1 text-base-content hover-scale"
            disabled
          />
          <button className="btn btn-accent hover-scale" disabled>
            اشتراك
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
