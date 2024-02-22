import React from 'react';
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.png";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.png";
import image8 from "../../images/image8.png";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image13.jpg";
import image11 from "../../images/image11.jpg";
import image12 from "../../images/image12.png";
import image13 from "../../images/image13.png";
import image14 from "../../images/image14.jpg";
import image15 from "../../images/image15.jpg";
import image16 from "../../images/image16.png";
import image17 from "../../images/image16.png";
import "./community.css";

const Community = () => {
  return (
    <section className="community">
            <p>
              React Navigation is built by
              <a href="https://expo.dev/" target="_blank" rel="noreferrer">
                Expo
              </a>
              ,
              <a href="https://swmansion.com/" target="_blank" rel="noreferrer">
                Sotware Mansion
              </a>
              and
              <a href="https://www.callstack.com/" target="_blank" rel="noreferrer">
                ClassStack
              </a>
              with contributions from the
              <a
                href="https://github.com/react-navigation/react-navigation/graphs/contributors"
                target="_blank"
                rel="noreferrer"
              >
                community
              </a>
              and
              <a
                href="https://github.com/sponsors/react-navigation"
                target="_blank"
                rel="noreferrer"
              >
                sponsers
              </a>
            </p>

            <div className="community-images">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
              <img src={image7} alt="" />
              <img src={image8} alt="" />
              <img src={image9} alt="" />
              <img src={image10} alt="" />
              <img src={image11} alt="" />
              <img src={image12} alt="" />
              <img src={image13} alt="" />
              <img src={image14} alt="" />
              <img src={image15} alt="" />
              <img src={image16} alt="" />
              <img src={image17} alt="" />
            </div>

            <p>
              If React Navigation is helpful to you, consider
              <a
                href="https://github.com/sponsors/react-navigation"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                supporting the project by sponsoring it 💜
              </a>
            </p>
          </section>
  )
}

export default Community