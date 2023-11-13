/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h2>All Products</h2>
      {props.products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <img src={product.image_url} alt="image" />
        </div>
      ))}
    </div>
  );
}
