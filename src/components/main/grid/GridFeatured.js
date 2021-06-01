import { Link } from "react-router-dom";

export default function GridFeatured({ data }) {
  return (
    <>
      {data.map((post) => {
        const { id, image, category, article, date } = post;
        return (
          <article className="grid-card" key={id}>
            <Link to={`${id}`}>
              <div className="grid-img-container">
                <img src={image} alt="post-cover" className="grid-img" />
              </div>
            </Link>
            <div className="grid-info">
              <div className="grid-post-type">
                <p>{category}</p>
              </div>
              <div className="grid-article">
                <h4>{article.substring(0, 200)}...</h4>
              </div>
              <Link to={`${id}`}>See more</Link>
              <p>{date}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
