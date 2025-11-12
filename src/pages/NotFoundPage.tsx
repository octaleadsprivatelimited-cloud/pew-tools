import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <div className="not-found container">
    <h1>404</h1>
    <p>The page you are looking for has been misplaced in the workshop.</p>
    <div className="not-found-actions">
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
      <Link to="/products" className="btn btn-outline">
        Browse tools
      </Link>
    </div>
  </div>
);
