import React from "react";
import Button from "../UI/Button/Button";
import { Form } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  return (
    <div className={`container p-10`}>
      <h1 className={`text-2xl font-bold`}>Add Product</h1>
      <Form method="POST" encType="multipart/form-data" className={`w-full max-w-xl m-auto`}>
        <div className={`py-2 w-full min-w-64`}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={`w-full h-11 border-px border-gray-400 p-2 rounded-md mt-2`}
            type="text"
            name="name"
            placeholder="Product Name"
          />
        </div>
        <div className={`py-2 w-full min-w-64`}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className={`w-full border-px border-gray-400 p-2 rounded-md mt-2`}
            rows={5}
            name="description"
            placeholder="Desciption"
          />
        </div>
        <div className={`py-2 w-full min-w-64`}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            className={`w-full h-11 border-px border-gray-400 p-2 rounded-md mt-2`}
            name="price"
            placeholder="Price"
          />
        </div>
        <div className={`py-2 w-full min-w-64`}>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type={"file"}
            
            className={`w-full py-3 border-px border-gray-400 p-2 rounded-md mt-2`}
            name="image"
          />
        </div>
        <div className={`flex flex-col py-2 w-full min-w-64`}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className={`py-2 px-1 border-px border-gray-400 rounded-md mt-2`}
          >
            <option value={"phones"}>phones</option>
            <option value={"watches"}>watches</option>
          </select>
        </div>
        <div className="w-full">
          <Button size="lg" mode="fill" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  const result = await axios.post("http://localhost:3000/api/products",formData);
  console.log(result)
  return 0;
}
