"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Don't show breadcrumbs on the home page
  if (pathSegments.length === 0) {
    return null;
  }

  // For product pages (e.g., /en/product/some-product), show only Home and product name
  const isProductPage =
    pathSegments.length >= 2 &&
    pathSegments[pathSegments.length - 2] === "product";

  if (isProductPage) {
    // Get the product slug (last segment)
    const productSlug = pathSegments[pathSegments.length - 1];
    const decodedProductSlug = decodeURIComponent(productSlug);

    return (
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/" className="text-primary hover:underline">
                الرئيسية
              </Link>
            </li>
            <li>
              <span className="capitalize">{decodedProductSlug}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // For other pages, show all segments
  return (
    <div id="breadcrumbs" className="container mx-auto px-4 py-4">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/" className="text-primary hover:underline">
              الرئيسية
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const decodedSegment = decodeURIComponent(segment);

            return (
              <li key={href}>
                {isLast ? (
                  <span className="capitalize">{decodedSegment}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-primary hover:underline capitalize"
                  >
                    {decodedSegment}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
