import React from "react";
import './style.css'
// import firstImage from '../../assets/images/first.png'
// import secondImage from '../../assets/images/second.png'
// import threeImage from '../../assets/images/three.png'
// import fourImage from '../../assets/images/four.png'

class Seaction extends React.Component {

    render() {
        return <div>

            <div className="box-seaction">  <div className={`box ${this.props.background}`}>
                <img className={'mini-img'} src={this.props.miniImg} alt='' />
                <p>{this.props.text}</p>

            </div></div>


{/* 

            <div className="car-seaction">
                <img className="big-img" src={this.props.img1} alt="" />
                <img className="big-img" src={this.props.img1} alt="" />
                <img className="big-img" src={this.props.img1} alt="" />
                <img className="big-img" src={this.props.img1} alt="" />

            </div>
 */}


            {/* 
            <img src= alt="" />
            <img src={secondImage} alt="" />
            <img src={threeImage} alt="" />
            <img src={fourImage} alt="" /> */}


        </div >
    }
}

export default Seaction 
