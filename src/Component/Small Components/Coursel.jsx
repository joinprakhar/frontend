import React, { useRef } from "react";

const Carousel = ({ children }) => {
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

  const handleScroll = (event) => {
    // Get the current scroll position
    const scrollLeft = event.target.scrollLeft;

    // Determine the scroll direction
    if (scrollLeft > prevScrollLeft.current) {
      // Scrolling to the right
      if (boxRef.current) {
        const width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft += width / 2;
      }
    } else {
      // Scrolling to the left
      if (boxRef.current) {
        const width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft -= width / 2;
      }
    }

    // Update the previous scroll position
    prevScrollLeft.current = scrollLeft;
  };

  return (
    <div className="product-carousel">
      <div className="product-container" ref={boxRef} onScroll={handleScroll}>
        {children}
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
      {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
      </div> */}
    </div>
  );
};

export default Carousel;
