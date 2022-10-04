import "./style.css";
export const Post = ({ title, url }) => {
  return (
    <div className="div-post">
      <div>
        <p>Title:{title}</p>
        <p> Img:{url} </p>
      </div>
    </div>
  );
};
