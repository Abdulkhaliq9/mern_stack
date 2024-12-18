import React from 'react'  
import S1 from "../../assets/images/more/s-1.jpg";
import S2 from "../../assets/images/more/s-2.jpg";
import S3 from "../../assets/images/more/s-3.jpg";

export default function Description() {
  return (
    <>
      <div className="content ">
        <div className="row">
          <div className="col-md-6">
            <div className="content-title">
              <div className="item-name">
                <h1>iPadPro</h1>
              </div>
              <div className="item-quote">
                <p>Your next computer is not a computer.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item-desc">
              <p>
                The iPad Pro is a magical piece of glass. It has pro
                cameras that can transform reality. You can use it with
                touch, pencil, keyboard and now trackpad. With the A12Z
                Bionic chip, iPad Pro outpaces most PC laptops today.
                Liquid Retina display features ProMotion, True Tone, and
                industry‑leading colour accuracy.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="left-side ">
              <div className="item-img">
                <img src={S1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-side">

              <div className="item-img   ">
                <img src={S2} alt="" />
              </div>
              <div className="item-img">
                <img src={S3} alt="" />
              </div>

            </div>
          </div>
        </div>




        <div className="more-info mt-5">
          <div className="h2 mb-2">
            <h2>More Information</h2>
          </div>




          <div className="desc-list  d-flex justify-content-center">
            <ul >
              <li>11-inch Liquid Retina display with ProMotion, True Tone and industry‑leading colour accuracy, which make everything feel responsive and look stunning</li>
              <li>11-inch Liquid Retina display with ProMotion, True Tone and industry‑leading colour accuracy, which make everything feel responsive and look stunning</li>
              <li>128GB of built-in storage offers plenty of room to store all your files, games, photos, and more</li>
              <li>Integrated Wi-Fi 6 for fast and efficient connectivity
              </li>
              <li> LiDAR Scanner works with the pro cameras, motion sensors and frameworks in iPadOS to measure depth; this combination of hardware, software and unprecedented innovation makes iPad Pro a standout device for augmented reality
              </li>
              <li> LiDAR Scanner works with the pro cameras, motion sensors and frameworks in iPadOS to measure depth; this combination of hardware, software and unprecedented innovation makes iPad Pro a standout device for augmented reality
              </li>
              <li>LiDAR Scanner works with the pro cameras, motion sensors and frameworks in iPadOS to measure depth; this combination of hardware, software and unprecedented innovation makes iPad Pro a standout device for augmented reality
              </li>
              <li> LiDAR Scanner works with the pro cameras, motion sensors and frameworks in iPadOS to measure depth; this combination of hardware, software and unprecedented innovation makes iPad Pro a standout device for augmented reality
              </li>
              <li> LiDAR Scanner works with the pro cameras, motion sensors and frameworks in iPadOS to measure depth; this combination of hardware, software and unprecedented innovation makes iPad Pro a standout device for augmented reality
              </li>
              <li>LiDAR Scanner works with the pro cameras, motion sensors and frameworks in iPadOS to measure depth; this combination of hardware, software and unprecedented innovation makes iPad Pro a standout device for augmented reality
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
