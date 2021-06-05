import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
                  <LazyLoadImage
                    src={image}
                    alt="post-cover"
                    effect="blur"
                    width="100%"
                    height="340px"
                  />
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
