import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { Post } from "../Post";

const url = `https://jsonplaceholder.typicode.com/photos`;

export const Photos = () => {
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPhotosData(data);
      });
  }, []);

  return (
    <div>
      <div className="photos-wrapper">
        {photosData.map((photo) => (
          <Post
            title={photo.title}
            src={photo.url}
            alt="photo"
            key={photo.id}
          />
        ))}
      </div>
    </div>
  );
};
