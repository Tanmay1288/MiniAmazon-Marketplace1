import React from "react";

function Product({ title = "No Title", price = "N/A", feature = [], feature2 = {} }) {
  const style = {
    backgroundColor: "lightblue",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    width: "250px",
    display: "inline-block",
    verticalAlign: "top"
  };

  return (
    <div className="product" style={style}>
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
      <h5>Product Description</h5>

      <ul>
        {feature.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {Object.entries(feature2).map(([key, value], index) => (
          <li key={index}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
