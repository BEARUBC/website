import React from "react";
import { Layout } from "./components/Layout";
import ubcapplied from "./Photos/Gold/ubc-applied.png";
import starfish from "./Photos/Silver/Starfish.png";
import digikey from "./Photos/Supporting/digikey.png";
import ieee from "./Photos/Bronze/ieee.png";
import bionicsnetworklogo from "./Photos/Gold/bionicsnetworklogo.png";
import ece from "./Photos/Gold/ece.png";
import sbme from "./Photos/Gold/sbme.jpeg";
import egbc from "./Photos/Silver/egbc.jpg";
import asee from "./Photos/Supporting/asee.png";
import eus from "./Photos/Supporting/eus.jpeg";
import pololu from "./Photos/Supporting/pololu.png";
import mecheng from "./Photos/Bronze/mecheng.jpeg";
import ubcmaterials from "./Photos/Bronze/ubcmaterials.jpg";
//slide images:
import slide1 from "./Photos/Thank You/fraser valley thank you.png";
import slide2 from "./Photos/Thank You/VHP thank you 1.png";
import slide3 from "./Photos/Thank You/pentland thank you.png";

const numberSlides = 3;
const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("slide");
const delay = 8000;

function Slideshow() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const indexRef = React.useRef(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(
      () => {
        let prevIndex = indexRef.current;
        setSlideIndex(prevIndex => ((prevIndex + 1) % numberSlides));
        indexRef.current = slideIndex;
      },
      delay
    );
  
    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  if (slides.length !== 0) {
    for (let i = 0; i < dots.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[slideIndex].className += " active";
  }

  if (dots.length !== 0) {
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
  }

  return(
    <div>
      <div class="slideshow-container">
        <div class="slide active">
            <img src={slide1} alt="fraservalley prosthetics"/>
        </div>
        <div class="slide">
            <img src={slide2} alt="victoria hand project"/>
        </div>
        <div class="slide">
            <img src={slide3} alt="pentland prosthetics & othotics"/>
        </div>
      </div>
      <div class="dot-container">
        <span class="dot active" onClick={() => setSlideIndex(0)}></span>
        <span class="dot" onClick={() => setSlideIndex(1)}></span>
        <span class="dot" onClick={() => setSlideIndex(2)}></span>
      </div>
    </div>
  );
}


export const Sponsor = () => {
  return (
    <Layout>
      <div class="py-2" />
      <div className="headerBlue text-center">OUR SPONSORS</div>
      <div class="py-3" />
      <div class="sponsor-header text-center">GOLD</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />

      <div class="py-2" />
      <div class="row">
        <div class="col-md-3">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={ubcapplied}
          />
          <div class="py-3" />
        </div>
        <div class="col-md-3">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={ece}
          />
        </div>
        <div class="col-md-3">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={bionicsnetworklogo} />
          </div>
          <div class="py-2" />
        </div>
        <div class="col-md-3">
          <img
            class="sq_sponsor center-block d-block mx-auto"
            alt=""
            src={sbme}
          />
          <div class="py-2" />
        </div>
      </div>
      <div class="py-3" />
      <div class="sponsor-header text-center">SILVER</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />
      <div class="py-2" />
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-2">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            // style={{ height: 110, width: 120 }}
            alt=""
            src={egbc}
          />
          <div class="py-2" />
        </div>
        <div class="col-sm-2" />
        <div class="col-sm-2" />
        <div class="col-sm-2">
          <div class="pl-1" />
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            // style={{ height: 200, width: 170 }}
            alt=""
            src={starfish}
          />
          <div class="py-2" />
        </div>
      </div>
      <div class="py-3" />
      <div class="sponsor-header text-center">BRONZE</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />

      <div class="py-2" />
      <div class="row">
        <div class="col-sm-4">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={mecheng}
          />
          <div class="py-2" />
        </div>
        <div class="col-sm-4">
          <img
            class="rect_sponsor img-responsive center-block d-block mx-auto"
            style={{ height: 130, width: 130 }}
            alt=""
            src={ubcmaterials}
          />
          <div class="py-2" />
        </div>
        <div class="col-sm-4">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={ieee} />
          </div>
          <div class="py-2" />
        </div>
      </div>

      <div class="py-3" />
      <div class="sponsor-header text-center">THANK YOU TO OUR SUPPORTING ORGANIZATIONS</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />
      <div class="py-2" />
      
      <Slideshow/>

      <div class="py-4" />
      <div class="row">
        <div class="col-md-3">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={digikey} />
          </div>
          <div class="py-3" />
        </div>
        <div class="col-md-3">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={pololu} />
          </div>
          <div class="py-2" />
        </div>
        <div class="col-md-3">
          <div class="image_div">
            <img
              class="rect_sponsor"
              alt=""
              src={asee}
            />
          </div>
        </div>
        <div class="col-md-3">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={eus}
          />
          {/* <div class="py-2" /> */}
        </div>
      </div>
      {/* <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      /> */}

      {/* <div class="py-4" />
      <div class="sponsor-header">
        FOR MORE SPONSORSHIP INFORMATION:
         {/*sponsorship package button}
        <button class="cute-btn">
          <a
            class="link"
            href="https://drive.google.com/drive/u/1/folders/1L06FEgcfDd0wOwUYOpnhefMNBcIUzbFQ"
          >
            Sponsorship Package
          </a>
        </button>
      </div> */}
    </Layout>
  );
};
