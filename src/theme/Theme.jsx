import Image from "next/image";

import { CgCloseR } from "react-icons/cg";

const Theme = ({ setOpenTheme, openTheme, ImageArray, setBgImage }) => {
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
          {ImageArray.map((item) => (
            <Image
              src={item.image}
              className="mini-image"
              key={item.idImage}
              alt=""
              onClick={() => setBgImage(item.image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Theme;
