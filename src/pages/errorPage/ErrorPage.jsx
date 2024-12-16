import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="error-page"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontSize: "larger",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error.data}</i> <br />
        <i>{error.internal}</i> <br />
        <i>{error.status}</i> <br />
        <i>{error.statusText}</i> <br />
      </p>
    </div>
  );
}
