import "./style.css";

export const Post = ({ title, src, alt }) => {
  return (
    <div className="div-post">
      <div>
        <p>Title:{title}</p>
        <img src={src} alt={alt} /> 
      </div>
    </div>
  );
};
