import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <section>
          <div class="slide">
            <div class="content">
              <h2><a href="/watch">Watchz</a></h2>
              {/* <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p> */}
            </div>
          </div>
              <div class="slide">
            <div class="content">
              <h2><a href="/watch">Grillz</a></h2>
              {/* <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p> */}
            </div>
          </div>
              <div class="slide">
            <div class="content">
              <h2><a href="/watch">Chainz</a></h2>
              {/* <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p> */}
            </div>
          </div>
              <div class="slide">
            <div class="content">
              <h2><a href="/watch">Pendantz</a></h2>
              {/* <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p> */}
            </div>
          </div>
        </section>
        <div>
          hello
        </div>
        {/* <div className="home__container-featured">
          <ul>
            <li>
              <a href="#"></a>
            </li>
          </ul>
          featured items
        </div>
        <div className="home__categories">
          <ul>
            <li>
              <a href="">Watchz</a>
            </li>
            <li>
              <a href="">Grillz</a>
            </li>
            <li>
              <a href="">Chainz</a>
            </li>
            <li>
              <a href="">Pendantz</a>
            </li>
          </ul>
        </div> */}
      </div>
    )
  }
}
