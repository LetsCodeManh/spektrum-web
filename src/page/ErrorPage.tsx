import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>NotFound</h1>
    </>
  );
};

export default ErrorPage;
