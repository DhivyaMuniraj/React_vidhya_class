import { useEffect, useMemo, useState } from "react";
const UsememoApi = () => {
  const [product, setProduct] = useState([]);
  const [input, setInput] = useState("");
  console.log("page render");
  useEffect(() => {
    console.log('USEEFECT')
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProduct(data);
        
      });
  }, []);

 
 const resultProduct=useMemo(() => {
  console.log("USEMEMO")
    let result = product.filter((item) => {
    //   console.log(product)
      
      if (item.category.includes(input.toLowerCase())) {
        return item;
      }
    });
    // console.log("state useeffect");
    return result
  }, [input,product]);

  return (
    <>
      <input
        value={input}
        placeholder="Enter the product"
        onChange={(e) => setInput(e.target.value)}></input>
      {/* {console.log(resultProduct)} */}
      {resultProduct.map((element) => {
        return <p>{element.category}</p>;
      })}
    </>
  );
};
export default UsememoApi;