import "./NotFoundPage.css";
import { Header } from "../components/Header";

export function NotFoundPage({ cart }) {
  return (
    <div className="Container">
      <title>Not Found Page</title>
      <Header cart={cart} />
      <div className="error">
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
      </div>
    </div>
  );
}
