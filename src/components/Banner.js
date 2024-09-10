import React from "react";

function Banner() {
  return (
    <section className="wrapperbackgroundbeige flex items-center justify-between p-10">
      <div className=" flex flex-col items-center justify-center">
        <p className="textbanner1">90%</p>
        <p className="textbanner2">of all orders are produced locally</p>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <p className="textbanner1">90%</p>
        <p className="textbanner2">of orders arrive within 5 days of ordering</p>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <p className="textbanner1">140+</p>
        <p className="textbanner2">print providers across 32 countries</p>
      </div>
    </section>
  );
}

export default Banner;
