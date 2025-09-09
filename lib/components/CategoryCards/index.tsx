import React from "react";

const categories = [
  {
    name: "إلكترونيات",
    icon: "smartphone",
    description: "أحدث الأجهزة والتكنولوجيا",
  },
  {
    name: "أزياء",
    icon: "shirt",
    description: "ملابس وإكسسوارات عصرية",
  },
  {
    name: "منزل",
    icon: "home",
    description: "كل ما تحتاجه لمنزلك",
  },
  {
    name: "رياضة",
    icon: "dumbbell",
    description: "معدات اللياقة البدنية والخارجية",
  },
];

const CategoryCards = () => {
  return (
    <section className="container mx-auto px-4 py-16 card">
      <h2 className="text-3xl font-bold text-center mb-12">
        التصنيفات المميزة
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            className={`card bg-base-200 shadow-xl card-hover cursor-pointer hover-lift animate-fade-in-up`}
            key={idx}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div className="card-body text-center">
              <i
                data-lucide={cat.icon}
                className="w-12 h-12 mx-auto mb-4 text-primary"
              ></i>
              <h3 className="card-title justify-center">{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
