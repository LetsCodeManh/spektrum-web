import { useEffect, useState } from "react";

const AnimatedHeader = () => {
  const [name, setName] = useState("Unternehmen");
  const names = ["Unternehmen", "Gewerbe", "Eigenheim"];

  useEffect(() => {
    const interval = setInterval(() => {
      setName(name[(names.indexOf(name) + 1) % names.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, [name]);

  return (
    <h1 className="inline-block text-3xl font-medium md:text-4xl lg:text-5xl">
      Die schnelle & einfache Grünstrom-Lösung für Ihr {name}
    </h1>
  );
};

export default AnimatedHeader;
