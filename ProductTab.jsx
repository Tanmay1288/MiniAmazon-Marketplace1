import React from "react";
import Product from "./Product";

function ProductTab() {
  const features = ["durable", "fast", "hitech"];
  const specs = { RAM: "8GB", Storage: "128GB", Warranty: "1 Year" };

  return (
    <>
      <Product title="Apple Pencil (2nd Gen)" price="1000" idx={0} feature={features} feature2={specs} />
      <Product title="Logitech MX" price="1000" idx={1} feature={features} feature2={specs} />
      <Product title="Zebronics Zeb" price="100" idx={2} feature={features} feature2={specs} />
      <Product title="iPhone" price="1000" idx={3} feature={features} feature2={specs} />
    </>
  );
}

export default ProductTab;
