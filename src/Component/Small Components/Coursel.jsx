import React, { useRef } from "react";
import "../../App.css";

const Carousel = ({ arrow, children }) => {
  const boxRef = useRef(null);
  const prevScrollLeft = useRef(0);

  const btnPressPrev = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width / 2;
    }
  };

  const btnPressNext = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width / 2;
    }
  };

  return (
    <>
      <div className="product-carousel">
        <div
          onClick={btnPressPrev}
          className="caro-arrow"
          style={{
            padding: "0",
            margin: "0 10px",
            fontSize: "20px",
            color: "white",
          }}
        >
          <i class="fa fa-toggle-left" style={{ color: arrow }}></i>
        </div>
        <div className="product-container" ref={boxRef}>
          {children}
        </div>
        <div
          onClick={btnPressNext}
          className="caro-arrow"
          style={{
            padding: "0",
            margin: "0 10px",
            fontSize: "20px",
            color: "white",
          }}
        >
          <i class="fa fa-toggle-right" style={{ color: arrow }}></i>
        </div>
      </div>
      <div className="arrow-cont">
        <div
          onClick={btnPressPrev}
          style={{
            padding: "0",
            margin: "0 10px",
            fontSize: "20px",
            color: "white",
          }}
        >
          <i class="fa fa-toggle-left"></i>
        </div>
        <div
          onClick={btnPressNext}
          style={{
            padding: "0",
            margin: "0 10px",
            fontSize: "20px",
            color: "white",
          }}
        >
          <i class="fa fa-toggle-right"></i>
        </div>
      </div>
    </>
  );
};

export default Carousel;
