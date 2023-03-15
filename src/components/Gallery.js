import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const Gallery = () => {
  const { images } = useContext(DataContext);

  return (
    <div>
      {images &&
        images.map((item) => (
          <img
            style={{ width: "150px" }}
            key={item.id}
            src={`http://127.0.0.1:8000/uploads/${item.image_name}`}
            alt="..."
            className="img-thumbnail"
          ></img>
        ))}
    </div>
  );
};

export default Gallery;
