import React, { useState } from 'react'
import './ShopPage.css'
import {products as prods} from '../data/data';
import CategoriesBar from '../components/CategoriesBar';
import SearchBar from '../components/SearchBar';



const ShopPage = () => {

 const [products,setProducts]=useState(prods)
 const [buproducts,setBuproducts]=useState(prods)

  // console.log(products)
  const productCategories = buproducts.map((product) => product.category);
  const distinctCategories = new Set(productCategories);

  console.log(distinctCategories);

  const allCategories = ["All", ...distinctCategories];

  console.log(allCategories);

  function filterByCategorey(selectedCategory)
  {
    // alert(selectedCategory)
    if(selectedCategory!=='All'){
    const filteredProductByCategory=buproducts.filter(
      (product)=>(product.category===selectedCategory)
    )
    setProducts(filteredProductByCategory)
  }
  else{
setProducts(buproducts)
  }
    
  } 

  // console.log(productCategories);


 function searchByTitle(event) {
  let searchText = event.target.value.toLowerCase();

  const searchedProducts = buproducts.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );

  setProducts(searchedProducts);
}
  return (
    <>
    <CategoriesBar list={allCategories} handleClick={filterByCategorey}/>
    <SearchBar handleChange={searchByTitle}/>
      <h1>Product Page </h1>
      {/* {
    productTitle.map(
        (product)=>(<p>{product}</p>)
    )
   }  */}
      <div className="parent-container">
        {products.map((product) => {
          return (
            <div className="card" key={product.id} >
              <img
                src={product.image}
                className="card-img-top product-image"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.slice(0, 100)}...
                </p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopPage
