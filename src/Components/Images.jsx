import React, { useEffect, useState } from "react";
import axios from "axios";
import 'aos/dist/aos.css';
import { Skeleton } from 'antd';

const App = () => {
  const [searchImg, setSearcImg] = useState("");
  const [img, setImg] = useState([]);

  const onChange = (e) => {
    setSearcImg(e.target.value);
  };

  const getImages = async () => {
    const getData = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${searchImg}&client_id=9088RcwAeMwYunEqbQoEPRBaKaGRC0CHDmKgmapatzE`
    );
    setImg(getData.data.results);
    console.log(getData.data.results)
  };

  const getImages1 = async () => {
    const getData = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=$cat&client_id=9088RcwAeMwYunEqbQoEPRBaKaGRC0CHDmKgmapatzE`
    );
    setImg(getData.data.results);
    console.log(getData.data.results)
  };

  useEffect(() => {
    getImages1()
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchImg.length < 1) {
      alert("please enter something to search")
    }
    else {
      getImages();
    }

    setSearcImg("")
  };

  return (
    <section className="main">
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1>Image Search App</h1>
          <div className="header1">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Search</span>
              <input value={searchImg}
                onChange={onChange} type="text" className="form-control" placeholder="Search for images " aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <button type="submit" className="btn">Search images</button>
        </form>
        <br />

        <div className="img1">
          {
            img.map((ele, i) => {
              return (
                <div className="pt-4" key={i}
                  data-aos="flip-up"
                >
                  {ele ? <img className="img" src={ele.urls.small} /> : <Skeleton />}
                </div>
              )
            })
          }
        </div>
      </div>


    </section>
  );
};

export default App;




