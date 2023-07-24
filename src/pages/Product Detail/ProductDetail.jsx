import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import { toast } from "react-toastify";
import "./ProductDetail.css";
const ProductDetail = () => {
  const { productId } = useParams();
  const { techProducts, setTechProducts } = useContext(ProductContext);
  const { handleAddToCart, cart } = useContext(CartContext);
  const { handleAddToWishlist,wishlist,handleDeleteFromWishlist } = useContext(WishlistContext);
  console.log(productId);
  const selectedProduct = techProducts.find(({ _id }) => _id === productId);
  console.log(selectedProduct);
  const navigate = useNavigate();
  const handleCartClick = () => {
    const existingItem = cart.find((item) => item._id === selectedProduct._id);

    if (existingItem) {
    } else {
      handleAddToCart(selectedProduct);
      toast.success("Added to cart", { autoClose: 500 });
    }
    const updatedTechProducts = techProducts.map((item) => {
      if (item._id === selectedProduct._id) {
        return { ...item, cartValue: true };
      }
      return item;
    });
    setTechProducts(updatedTechProducts);
    if (selectedProduct.cartValue === true) {
      navigate("/cart");
    }
  };

  const handleWishlistClick = () => {
    const existingItem = wishlist.find((item) => item._id === selectedProduct._id);
  
    if (existingItem) {
      // If the product is already in the wishlist, remove it
      // handleDeleteFromWishlist(selectedProduct._id);
      // toast.success("Removed from wishlist", { autoClose: 500 });
    } else {
      // If the product is not in the wishlist, add it
      handleAddToWishlist(selectedProduct);
      toast.success("Added to wishlist", { autoClose: 500 });
    }
  
    // Update the wishlistValue for the product in techProducts state
    const updatedTechProducts = techProducts.map((item) => {
      if (item._id === selectedProduct._id) {
        return { ...item, wishlistValue: !existingItem };
      }
      return item;
    });
  
    setTechProducts(updatedTechProducts);
  
    if (selectedProduct.wishlistValue === true) {
      navigate("/wishlist");
    }
  };
  return (
    <div className="product-details">
      <div className="product-img-div">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="selected-product-img"
        />
      </div>
      <div className="details-section">
        <h3>{selectedProduct.name}</h3>
        <p>
          <b>Description:</b> {selectedProduct.description}
        </p>
        <p>
          <b>Price:</b> {selectedProduct.price}
        </p>
        <p>
          <b>Brand: </b>
          {selectedProduct.brand}
        </p>
        <p>
          <b>Category:</b> {selectedProduct.category}
        </p>
        <p>
          <b>RAM:</b> {selectedProduct.ram}
        </p>
        <p>
          <b>Storage:</b> {selectedProduct.storage}
        </p>
        <p>
          <b>Rating:</b> {selectedProduct.rating}
        </p>
        <div className="btns">
          <button
            onClick={handleCartClick}
            className="product-cart-btn"
            style={{
              backgroundColor: selectedProduct.cartValue
                ? "rgb(255, 98, 20)"
                : "",
              color: selectedProduct.cartValue ? "black" : "",
            }}
          >
            {selectedProduct.cartValue === true ? "Go to Cart" : "Add to Cart"}
          </button>
          <button
            onClick={handleWishlistClick}
            style={{
              backgroundColor: selectedProduct.wishlistValue
                ? "rgb(255, 98, 20)"
                : "",
              color: selectedProduct.wishlistValue ? "black" : "",
            }}
            className="product-wishlist-btn"
          >
                  {selectedProduct.wishlistValue === true ? "Go to Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
