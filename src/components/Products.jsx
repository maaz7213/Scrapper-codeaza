import React from 'react';
import './ProductTable.css';

const ProductTable = ({ data }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Total Reviews</th>
          <th>Image</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price || 'N/A'}</td>
            <td>{product.rating || 'No rating'}</td>
            <td>{product.total_reviews}</td>
            <td><img src={product.image_url} alt={product.title} width="50" /></td>
            <td><a href={product.product_url} target="_blank" rel="noopener noreferrer">View Product</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
