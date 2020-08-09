import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.seurata.com/Content/Images/uploaded/banner-Amazon-Pay-banner-marketplace.png"
          alt="ad"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one, click the "Add to
              basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
