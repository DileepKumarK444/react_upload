import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import { useContext } from "react";
import DataContext from "./context/DataContext";
import Gallery from "./components/Gallery";

function App() {
  const { setFile } = useContext(DataContext);
  const { setName } = useContext(DataContext);
  const { handleSubmit } = useContext(DataContext);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-6" style={{ margin: "50px" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Select Image
            </label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              className="form-control"
              type="file"
              id="image"
              name="image"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <Gallery />
    </>
  );
}

export default App;
