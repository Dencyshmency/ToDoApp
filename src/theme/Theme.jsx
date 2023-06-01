import Image from "next/image";

import { CgCloseR } from "react-icons/cg";

import bg from "public/background.jpg";
import bg2 from "public/background2.jpg";
import bg4 from "public/background4.jpg";
import bg5 from "public/background5.jpg";
import bg6 from "public/background6.jpg";
import bg7 from "public/background7.jpg";

const Theme = ({ setOpenTheme, openTheme, ImageArray, setBgImage }) => {
  const img1 = () => {
    let img = document.querySelector(".content");
    img.style.backgroundImage = "url(/background.jpg)";
    console.log(ImageArray);
  };

  const img2 = () => {
    let img = document.querySelector(".content");
    img.style.backgroundImage = "url(/background2.jpg)";
    console.log(ImageArray);
  };
  const img3 = () => {
    let img = document.querySelector(".content");
    img.style.backgroundImage = "url(/background3.jpg)";
    console.log(ImageArray);
  };
  const img4 = () => {
    let img = document.querySelector(".content");
    img.style.backgroundImage = "url(/background4.jpg)";
    console.log(ImageArray);
  };
  const img5 = () => {
    let img = document.querySelector(".content");
    img.style.backgroundImage = "url(/background5.jpg)";
    console.log(ImageArray);
  };
  const img6 = () => {
    let img = document.querySelector(".content");
    img.style.backgroundImage = "url(/background6.jpg)";
    console.log(ImageArray);
  };

  return (
    <div
      className={`wrapper-theme ${openTheme ? "open-wrapper-theme" : ""}`}
      onClick={() => setOpenTheme(false)}
    >
      <div
        className={`wrapper-theme-panel ${openTheme ? "open-theme-panel" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="close-panel">
          <button>
            <CgCloseR
              className="close-icon"
              onClick={() => setOpenTheme(false)}
            />
          </button>
        </div>
        <div className="image-panel">
          <Image src={bg} alt="" className="mini-image" onClick={img1} />
          <Image src={bg2} alt="" className="mini-image" onClick={img2} />
          <Image src={bg4} alt="" className="mini-image" onClick={img3} />
          <Image src={bg5} alt="" className="mini-image" onClick={img4} />
          <Image src={bg6} alt="" className="mini-image" onClick={img5} />
          <Image src={bg7} alt="" className="mini-image" onClick={img6} />
        </div>
      </div>
    </div>
  );
};
export default Theme;
