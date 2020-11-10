import React, { Component } from 'react';
import { GrillItems } from './GrillItems';

export default class Grill extends Component {
  render() {
    return (
      <div className="bling__container">
        {GrillItems.map((item, index) => {
          return (
            <ul>
              <div key={index} className="bling__img-container">
                {/* <Link to={item.path}> */}
                  <img src={item.imageOne} />
                  {/* <img src={item.imageTwo} /> */}
              </div>
              <li>
                  {item.title}
              </li>
              <li>
                  <span>$ {item.price}</span>
              </li>
              <div className="bling__button">
                <button>Add to cart</button>
              </div>
            </ul>
          );
        })}
      </div>
    )
  }
}
