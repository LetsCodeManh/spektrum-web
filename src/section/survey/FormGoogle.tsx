const FormGoogle = () => {
  const script = document.createElement("script");
  const location = document.getElementById("ff-compose");
  script.id = "ff-script";
  script.src =
    "https://formfacade.com/include/115934395985304346354/form/1FAIpQLSdfqZ9C89gYc2qn2YS_d2BkLRCP7kIwJCTotBfz6LZk3MmrdA/classic.js?div=ff-compose";
  script.defer = true;
  script.async = true;
  location?.appendChild(script);

  return <div id="ff-compose"></div>;
};

export default FormGoogle;
