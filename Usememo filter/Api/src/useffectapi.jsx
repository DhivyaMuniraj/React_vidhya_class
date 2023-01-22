import { useEffect, useState } from "react";
const UseeffectApi = () => {
  const [product, setProduct] = useState([]);
  const [input, setInput] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  console.log("page render");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProduct(data);
        setFilteredProduct(data);
      });
  }, []);

  // const display = (element) => setItem(element);
  useEffect(() => {
    let result = product.filter((item) => {
      console.log(filteredProduct)
      
      if (item.category.includes(input.toLowerCase())) {
        return item;
      }
    });
    console.log("state useeffect");
    setFilteredProduct(result);
  }, [input]);

  return (
    <>
      <input
        value={input}
        placeholder="Enter the product"
        onChange={(e) => setInput(e.target.value)}></input>

      {filteredProduct.map((element) => {
        return <p>{element.category}</p>;
      })}
    </>
  );
};
export default UseeffectApi;
