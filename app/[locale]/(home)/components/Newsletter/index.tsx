import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">ابقوا على اطلاع</h2>
        <p className="text-lg mb-8">
          اشتركوا في نشرتنا البريدية للحصول على أحدث العروض والمنتجات الجديدة
        </p>
        <div className="max-w-md mx-auto">
          <div className="join w-full">
            <input
              className="input input-bordered join-item w-full"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <button className="btn btn-primary join-item">اشتراك</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
