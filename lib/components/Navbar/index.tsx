"use client";

import useOutsiedClick from "@/lib/hooks/useOutsiedClick";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeDropdown = () => {
    detailsRef.current?.removeAttribute("open");
  };

  useOutsiedClick(detailsRef, closeDropdown);

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname, searchparams]);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>إلكترونيات</a>
              </li>
              <li>
                <a>ملابس</a>
              </li>
              <li>
                <a>منزل وحديقة</a>
              </li>
              <li>
                <a>رياضة</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">مودرن شوب</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-primary">إلكترونيات</a>
            </li>
            <li>
              <a className="hover:text-primary">ملابس</a>
            </li>
            <li>
              <a className="hover:text-primary">منزل وحديقة</a>
            </li>
            <li>
              <a className="hover:text-primary">رياضة</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="form-control hidden md:block">
            <input
              type="text"
              placeholder="البحث عن المنتجات..."
              className="input input-bordered input-sm w-32 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <i data-lucide="shopping-cart"></i>
                <span
                  className="badge badge-sm indicator-item badge-primary"
                  id="cart-count"
                >
                  0
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-80 shadow-xl"
            >
              <div className="card-body">
                <span className="text-lg font-bold">عناصر السلة</span>
                <div id="cart-items" className="space-y-2">
                  <p className="text-base-content/70">سلة التسوق فارغة</p>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    عرض السلة
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle">
            <i data-lucide="user"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
