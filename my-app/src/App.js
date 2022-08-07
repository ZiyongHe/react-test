import "./App.css";
import { useState, useEffect, useRef } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [data, setData] = useState();
  const [displayList, setDisplayList] = useState();
  const inputEl = useRef("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(res => {
        setData(res.slice(0, 20));
        setDisplayList(res.slice(0, 20));
      });
  }, []);

  const searchHandler = () => {
    const input = inputEl.current.value;
    const filteredArray = data.filter(each => each.title.indexOf(input) > -1);
    setDisplayList(filteredArray);
  };
  return (
    <div className="App">
      <div className="content">
        <input
          type="text"
          ref={inputEl}
          style={{ width: "300px" }}
          onChange={searchHandler}
        ></input>
        <div className="imageContainer container text-center">
          <div className="row row-cols-sm-3">
            {displayList &&
              displayList.map(object => {
                return (
                  <ImageCard
                    key={object.id}
                    object={object}
                    data={data}
                    setData={setData}
                    displayList={displayList}
                    setDisplayList={setDisplayList}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
