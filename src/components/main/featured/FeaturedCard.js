import { Link } from "react-router-dom";
export default function FeaturedCard({ blogs }) {
  return (
    <>
      {blogs
        .map((post) => {
          const { id, image, type, article, date } = post;
          return (
            <article className="featured-card" key={id}>
              <div className="featured-img-container">
                <img src={image} alt="post-cover" />
              </div>
              <div className="featured-info">
                <div className="post-type">
                  <p>{type}</p>
                </div>
                <h4>{article.substring(0, 200)}...</h4>
                <Link to={`${id}`}>See more</Link>
                <p>{date}</p>
              </div>
            </article>
          );
        })
        .slice(0, 3)}
    </>
  );
}
