import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomeSlider.css'

function HomeSlider() {
  return (
        <section className="hero">
            <div className="container">
                <div className="text-block">
                    <p>$18.99</p>
                    <h1>Margheritta</h1>
                    <p>Italiano</p>
                    <button class="button" type="button">Order Now</button>
                </div>
            </div>
        </section>
  );
}

export default HomeSlider;