import { useMediaQuery } from "react-responsive";

import data from "../assets/data.json";
import ProductCategoryCard from "../components/ProductCategoryCard";
import ProductCategoryCardTablet from "../components/ProductCategoryCardTablet";

const CategoryPage = () => {
  const urlArray = window.location.href.split("/");
  const product = urlArray[urlArray.length - 1];

  const products = data.filter((item) => item.category === product);

  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <div>
      {products.map((product, index) =>
        isDesktop ? (
          <ProductCategoryCard
            key={product.id}
            product={product}
            imgPos={index % 2 === 0 ? "left" : "right"}
          />
        ) : (
          <ProductCategoryCardTablet key={product.id} product={product} />
        )
      )}
    </div>
  );
};

export default CategoryPage;
