import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Section from './Section'
import './index.css';
import App from './App';
import Fade from 'react-reveal/Fade';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Section
      name="Model 3"
      tagline='Order Online for Touchless Delivery'
      leftBtn='Custom Order'
      rightBtn='Existing Inventory'
      backgroundImg='model-3.jpg'
      aref="3"
      arrow={true}
    />
    <Section name="Model S"
      tagline='Order Online for Touchless Delivery'
      leftBtn='Custom Order'
      rightBtn='Existing Inventory'
      backgroundImg='model-s.jpg'
      aref="s"
    />
    <Section name="Model X"
      tagline='Order Online for Touchless Delivery'
      leftBtn='Custom Order'
      rightBtn='Existing Inventory'
      backgroundImg='model-x.jpg'
      aref="x"
    />

    <Section name="Model Y"
      tagline='Order Online for Touchless Delivery'
      leftBtn='Custom Order'
      rightBtn='Existing Inventory'
      backgroundImg='model-y.jpg'
      aref="y"
    />

    <Section name="Solar Roof"
      tagline='Order Online for Touchless Delivery'
      leftBtn='Custom Order'
      rightBtn='Existing Inventory'
      backgroundImg='solar-roof.jpg'
      aref="sr"
    />

    <Section name="Solar Panels"
      tagline='Order Online for Touchless Delivery'
      leftBtn='Custom Order'
      rightBtn='Existing Inventory'
      backgroundImg='solar-panel.jpg'
      aref="sp"


    />
    <Section
      name="Accesories"
      leftBtn='Custom Order'
      backgroundImg='accessories.jpg'


    />
  </>
);

