export function ProductsNew() {
  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
