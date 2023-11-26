import React, { Component } from "react";
import background from "./../../src/assets/image/background.jpg";
import model from "./../../src/assets/image/model.jpg";
import g1 from "./../../src/assets/image/v1.png";
import g2 from "./../../src/assets/image/v2.png";
import g3 from "./../../src/assets/image/v3.png";
import g4 from "./../../src/assets/image/v4.png";
import g5 from "./../../src/assets/image/v5.png";
import g6 from "./../../src/assets/image/v6.png";
import g7 from "./../../src/assets/image/v7.png";
import g8 from "./../../src/assets/image/v8.png";
import g9 from "./../../src/assets/image/v9.png";

export default class Glasses extends Component {
  state = {
    mauKinh: "./../../src/assets/image/v1.png",
  };
  render() {
    const arrGlasses = [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./image/glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./image/glassesImage/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./image/glassesImage/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./image/glassesImage/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./image/glassesImage/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./image/glassesImage/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./image/glassesImage/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./image/glassesImage/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./image/glassesImage/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ];

    const renderListGlasses = () => {};

    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   backgroundPosition: "center",
          height: "100%",
        }}
      >
        <h2 className="bg-dark bg-opacity-50 text-white text-center py-4">
          TRY GLASSES APP ONLINE
        </h2>
        <div className="container">
          <img
            style={{
              width: "25%",
              position: "relative",
              transform: "translateX(150%)",
            }}
            src={model}
            alt="glasses"
          />
          <img
            style={{
              position: "absolute",
              transform: "translateX(147%)",
              top: "200px",
              width: "165px",
            }}
            src={`./../../src/assets/image/${this.state.mauKinh}.png`}
            alt=""
          />
          <div className="row bg-light my-5 p-4">
            {arrGlasses.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    this.setState({
                      mauKinh: item.url,
                    });
                  }}
                  key={index}
                >
                  {item.id}
                </button>
              );
            })}
            <div className="col-2">
              <img id="1" className="w-100" src={g1} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="2" className="w-100" src={g2} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="3" className="w-100" src={g3} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="4" className="w-100" src={g4} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="5" className="w-100" src={g5} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="6" className="w-100" src={g6} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="7" className="w-100" src={g7} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="8" className="w-100" src={g8} alt="glasses" />
            </div>
            <div className="col-2">
              <img id="9" className="w-100" src={g9} alt="glasses" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
