import axios from "axios";

const baseUrl = "https://shopper-web-server.vercel.app";

const allProducts = async () => {
  try {
    const response = await axios(`${baseUrl}/products`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
const allCategories = async () => {
  try {
    const response = await axios(`${baseUrl}/products/categories`);
    const data = await response.data;
    for (let category of data) {
      return category.categories;
    }
  } catch (error) {
    console.log(error);
  }
};

const allCategory = async (category) => {
  try {
    const response = await axios(`${baseUrl}/products/category/${category}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const singleProduct = async (id) => {
  try {
    console.log(id);
    const response = await axios(`${baseUrl}/products/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
const updateProfile = async (
  customerId,
  first,
  last,
  age,
  email,
  mobile,
  password,
  address
) => {
  try {
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        customerId: customerId,
        first: first,
        last: last,
        age: age,
        email: email,
        mobile: mobile,
        password: password,
        address: address,
      },
    };
    // console.log(option.body);

    const response = await axios.post(
      "http://127.0.0.1:2050/update",
      option.body
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export {
  allCategories,
  allProducts,
  allCategory,
  updateProfile,
  singleProduct,
};
