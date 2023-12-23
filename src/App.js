import React from "react";
import Header from "./components/web-page/header"
import Seaction from "./components/web-page/section"


import firstImage from './assets/images/first.png'
import secondImage from './assets/images/second.png'
import threeImage from './assets/images/three.png'
import fourImage from './assets/images/four.png'
import car1 from './assets/images/car1.jpg'
import car2 from './assets/images/car2.jpg'
import car3 from './assets/images/car3.jpg'
import car4 from './assets/images/car4.jpg'


class App extends React.Component {
  render() {
    return <div className="flex">

      <div className="first-section">
        <div className="class1">  <Seaction background={"color-red"} miniImg={firstImage} text={'UNLIMITED COLOR VARIANTS'} />
          <Seaction background={"color-blue"} miniImg={secondImage} text={'MANY REUSABLE ELEMENTS'} /></div>
        <div className="class1">    <Seaction background={"color-yellow"} miniImg={threeImage} text={'RESPONSIVE LAYOUTE'} />
          <Seaction background={"color-green"} miniImg={fourImage} text={'CLEAN MODERN CODE'} /></div>
      </div>

      {/* <div className="car1-seaction">
        <Seaction img1={car1} />
        <Seaction img1={car2} />
        <Seaction img1={car3} />
        <Seaction img1={car4} />
      </div> */}
    </div>
  }
}

export default App