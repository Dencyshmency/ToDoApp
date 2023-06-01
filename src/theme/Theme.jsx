import Image from "next/image";

import { CgCloseR } from "react-icons/cg";

import bg from "public/background.jpg";
import bg2 from "public/background2.jpg";
import bg3 from "public/background3.jpg";
import bg4 from "public/background4.jpg";
import bg5 from "public/background5.jpg";
import bg6 from "public/background6.jpg";
import bg7 from "public/background7.jpg";
import bg9 from "public/background9.jpg";

const Theme = ({ setOpenTheme, openTheme, ImageArray, setBgImage }) => {
  const art = (ImageArray) => {
    let img = document.querySelector(".content");
    img.style.backgroundImage = "url(/background4.jpg)";
    console.log(ImageArray);
  };

  const pool = () => {
    let g = document.querySelector(".mini-image");

    console.log(g.src);
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
          <Image src={bg} alt="" className="mini-image" />
          <Image src={bg2} alt="" className="mini-image" />
          <Image src={bg3} alt="" className="mini-image" />
          <Image src={bg4} alt="" className="mini-image" />
          <Image src={bg5} alt="" className="mini-image" />
          <Image src={bg6} alt="" className="mini-image" />
          <Image src={bg7} alt="" className="mini-image" />
          <Image src={bg9} alt="" className="mini-image" />
        </div>
      </div>
    </div>
  );
};
export default Theme;
