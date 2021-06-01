import { Link } from "react-router-dom";
export default function FeaturedCard({ blogs }) {
  return (
    <>
      {blogs
        .map((post) => {
          const { id, image, category, article, date } = post;
          return (
            <article className="featured-card" key={id}>
              <Link to={`${id}`}>
                <div className="featured-img-container">
                  <img src={image} alt="post-cover" />
                </div>
              </Link>
              <div className="featured-info">
                <div className="post-type">
                  <p>{category}</p>
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
