import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops! An Error Occurred.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to={"/"}>
        <button className="bg-slate-900 text-white py-2 px-2 rounded-md ml-2 mt-2">Back to Home</button>
      </NavLink>
    </>
  );
};

export default ErrorPage;
