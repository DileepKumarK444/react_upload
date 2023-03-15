// import { Children } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const DataContext = createContext({});

export const DataProvide = ({ children }) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);

  // const [fileName,setFileName] = useState('')
  const get_all = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/get_all");
    setImages(res["data"]);
    // console.log(images);
  };

  useEffect(() => {
    get_all();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFile(e.target.files[0]);
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "mutipart/form-data",
          },
        }
      );
      console.log(res.data.ss);
      setImages((prev) => [...prev, res.data.ss]);
      console.log(images);
      // filename
    } catch (e) {}
  };

  return (
    <DataContext.Provider
      value={{
        handleSubmit,
        file,
        setFile,
        name,
        setName,
        images,
        setImages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
