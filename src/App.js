/**@jsxRuntime classic*/
/**@jsx jsx*/

import {css, jsx} from "@emotion/react"
import React from 'react'
import header from "./images/image-header-desktop.jpg"

function App() {
  return (
    <div className="App" css={CSS}>
      <div className="card__container">
        <div className="card__details">
          <div className="heading">
            <h1>Get <span>insights</span> that help your business grow.</h1>
          </div>
          <div className="description">
            <p>Discover the benefits of data analysis and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          </div>
          <div className="tile__container">
            <div className="tile">
              <h1>10k+</h1>
              <p>Companies</p>
            </div>
            <div className="tile">
              <h1>314</h1>
              <p>Templates</p>
            </div>
            <div className="tile">
              <h1>12M+</h1>
              <p>Queries</p>
            </div>
          </div>
        </div>
        <div className="card__image">
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
background-color: var(--primary-very-dark-blue);
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
font-family: "Inter", sans-serif;

@media screen and (max-width: 750px) {
  height: 1040px;
}

.card__container {
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-dark-saturated-blue);
  color: var(--neutral-white);
  width: 1100px;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    width: 550px;
    height: 800px;
  }

  .card__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding: 50px;

    @media screen and (max-width: 750px) {
      width: 100%;
      height: 50%;
    }
    
    .heading {

      h1 {

        span {
          color: var(--primary-soft-violet);
        }
      }
    }

    .description {

      p {
        color: var(--neutral-slightly-transparent-white-stats);
        font-size: var(--font-size);
      }
    }

    .tile__container {
      display: flex;
      justify-content: space-around;

      .tile {

        p {
          font-size: var(--font-size);
          color: var(--neutral-slightly-transparent-white-stats);
        }
      }
    }
  }

  .card__image {
    width: 50%;
    height: 450px;
    background: url(${header});
    background-size: cover;
    position: relative;

    @media screen and (max-width: 750px) {
      width: 100%;
    }

    .overlay {
      position: absolute;
      background: var(--primary-soft-violet);
      height: 100%;
      width: 100%;
      opacity: 0.5;
    }
  }
}
`

export default App;
