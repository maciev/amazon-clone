import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmZkNTUwNjEt/ZmZkNTUwNjEt-MWQxYWVjNzgt-w1500._CB409612199_.jpg"
        alt="etc"
      />

      {/*product id, title, price, rating*/}
      <div className="home__row">
        <Product
          id="12321341"
          title="Letsfit Resistance Loop Band Exercise Band"
          price={9.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/616Oubwk6rL._AC_UL960_FMwebp_QL65_.jpg"
        />
        <Product
          id="1232421454"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123523523"
          title="Stuffed Alligrator Plush Toy"
          price={8.47}
          rating={5}
          image=" https://m.media-amazon.com/images/I/51ctSxWqH6L._AC_UY654_FMwebp_QL65_.jpg  "
        />
        <Product
          id="12523623"
          title="Nike Revolution 5 Running Shoe"
          price={64.34}
          rating={5}
          image="https://m.media-amazon.com/images/I/61a9xeVh5uL._AC_UL960_FMwebp_QL65_.jpg"
        />
        <Product
          id="12321341"
          title="Ninja Professional 72 Ounce Blender"
          price={79.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_UY654_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
