import { createRef } from "react";

export default function ImageCard({
  object,
  data,
  setData,
  key,
  displayList,
  setDisplayList,
}) {
  const idRef = createRef(object.id);
  const handleClick = e => {
    setData(data.filter(object => object.id !== idRef.current));
    setDisplayList(displayList.filter(object => object.id !== idRef.current));
  };

  if (!idRef.current) idRef.current = object.id;

  return (
    <div className="imageCard" onClick={e => handleClick(e)} id={key}>
      <img
        src={`https://randomuser.me/api/portraits/men/${object.id}.jpg`}
        width="200"
        height="200"
        alt=""
      ></img>
      <p id={key}>{object.title ? object.title : "Title"}</p>
    </div>
  );
}
