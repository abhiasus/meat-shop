import React from "react";
import "../assets/style/style.css";

import heroImage from "../assets/images/hero.jpg";
import chickenImage from "../assets/images/chicken.jpg";
import muttonImage from "../assets/images/mutton.jpg";

function Home() {
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

          <div className="collapse navbar-collapse" id="navbarContent">

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


      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1>
                Fresh Meat,
                <br />
                Quality You Can Trust
              </h1>

              <p>
                Fresh chicken and premium mutton carefully selected
                for delicious everyday meals.
              </p>

              <a
                href="#/products"
                className="btn btn-main"
              >
                Explore Products
              </a>

            </div>


            <div className="col-md-6">

              <img
                src={heroImage}
                className="img-fluid rounded"
                alt="Fresh Meat"
              />

            </div>

          </div>

        </div>

      </section>



      <section className="products">

        <div className="container">

          <h2>Our Fresh Meat</h2>

          <div className="row">

            <div className="col-md-6">

              <div className="product-card">

                <img
                  src={chickenImage}
                  alt="Fresh Chicken"
                />

                <h3>Fresh Chicken</h3>

                <p>
                  Fresh and tender chicken prepared for
                  delicious home-cooked meals.
                </p>

                <strong>
                  Starting from ₹299 / kg
                </strong>

              </div>

            </div>


            <div className="col-md-6">

              <div className="product-card">

                <img
                  src={muttonImage}
                  alt="Fresh Mutton"
                />

                <h3>Fresh Mutton</h3>

                <p>
                  Premium quality mutton selected for
                  rich and flavorful dishes.
                </p>

                <strong>
                  Starting from ₹649 / kg
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="about">

        <div className="container">

          <h2>Why Choose FreshCut Meat?</h2>

          <p>
            We provide fresh chicken and premium mutton
            selected with care. Our meat is prepared to
            give you quality ingredients for delicious
            everyday meals.
          </p>

        </div>

      </section>



      <section className="contact">

        <div className="container">

          <h2>Visit FreshCut Meat</h2>

          <p>
            Fresh meat for your everyday meals.
          </p>

          <p>
            +91 9876 543 210
          </p>

          <p>
             freshcutmeat@gmail.com
          </p>

          <p>
             Bengaluru, India
          </p>

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

              <p> +91 111 1110</p>

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

export default Home;