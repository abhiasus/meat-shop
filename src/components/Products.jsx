import React from "react";
import "../assets/style/style.css";

import chickenBreast from "../assets/images/chicken-breast.jpg";
import chickenLeg from "../assets/images/chicken-leg.jpg";
import chickenWings from "../assets/images/chicken-wings.jpg";

import muttonChops from "../assets/images/mutton-chops.jpg";
import muttonKeema from "../assets/images/mutton-keema.jpg";
import muttonRibs from "../assets/images/mutton-ribs.jpg";

function Products() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark">

        <div className="container">

          <a className="navbar-brand" href="#/">
            FreshCut Meat
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarContent"
          >

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/products">
                  Products
                </a>
              </li>

            </ul>

          </div>

        </div>

      </nav>


      {/* PRODUCTS */}
      <section className="product-page">

        <div className="container">

          <h1>Our Meat Products</h1>

          <p className="product-page-text">
            Fresh chicken and premium mutton for your favorite meals.
          </p>



          <h2>Chicken</h2>

          <div className="row">

            <div className="col-md-4">

              <div className="product-box">

                <img
                  src={chickenBreast}
                  alt="Chicken Breast"
                />

                <h3>
                  Chicken Breast
                </h3>

                <p>
                  Tender and juicy chicken breast perfect
                  for healthy and delicious meals.
                </p>

                <h4>
                  ₹349 / kg
                </h4>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-box">

                <img
                  src={chickenLeg}
                  alt="Chicken Leg"
                />

                <h3>
                  Chicken Leg
                </h3>

                <p>
                  Fresh chicken legs with great flavor
                  for roasting, grilling and curries.
                </p>

                <h4>
                  ₹319 / kg
                </h4>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-box">

                <img
                  src={chickenWings}
                  alt="Chicken Wings"
                />

                <h3>
                  Chicken Wings
                </h3>

                <p>
                  Fresh chicken wings perfect for frying,
                  grilling and tasty snacks.
                </p>

                <h4>
                  ₹339 / kg
                </h4>

              </div>

            </div>

          </div>


  
          <h2 className="mutton-title">
            Mutton
          </h2>

          <div className="row">

            <div className="col-md-4">

              <div className="product-box">

                <img
                  src={muttonChops}
                  alt="Mutton Chops"
                />

                <h3>
                  Mutton Chops
                </h3>

                <p>
                  Tender mutton chops ideal for grilling,
                  roasting and flavorful recipes.
                </p>

                <h4>
                  ₹899 / kg
                </h4>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-box">

                <img
                  src={muttonKeema}
                  alt="Mutton Keema"
                />

                <h3>
                  Mutton Keema
                </h3>

                <p>
                  Freshly minced mutton perfect for keema,
                  kebabs and delicious curries.
                </p>

                <h4>
                  ₹799 / kg
                </h4>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-box">

                <img
                  src={muttonRibs}
                  alt="Mutton Ribs"
                />

                <h3>
                  Mutton Ribs
                </h3>

                <p>
                  Premium mutton ribs with rich flavor
                  for slow cooking and grilling.
                </p>

                <h4>
                  ₹949 / kg
                </h4>

              </div>

            </div>

          </div>

        </div>

      </section>



      <footer>

        <div className="container">

          <div className="row">

            <div className="col-md-4">

              <h3>FreshCut Meat</h3>

              <p>
                Fresh chicken and quality mutton
                for delicious everyday meals.
              </p>

            </div>


            <div className="col-md-4">

              <h3>Quick Links</h3>

              <a href="#/">
                Home
              </a>

              <a href="#/products">
                Products
              </a>

            </div>


            <div className="col-md-4">

              <h3>Contact</h3>

              <p> Bengaluru, India</p>

              <p> +91 9876 543 210</p>

              <p>freshcutmeat@gmail.com</p>


              <h3>Follow Us</h3>

              <div className="social-links">

                <a href="#">
                  Facebook
                </a>

                <a href="#">
                  X
                </a>

                <a href="#">
                  Instagram
                </a>

                <a href="#">
                  LinkedIn
                </a>

              </div>

            </div>

          </div>


          <hr />

          <p className="copyright">
            © 2026 FreshCut Meat. All Rights Reserved.
          </p>

        </div>

      </footer>
    </>
  );
}

export default Products;