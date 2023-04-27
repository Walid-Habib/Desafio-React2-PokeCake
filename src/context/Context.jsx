import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [fotos, setFotos] = useState([]);

  const getFotos = async () => {
    const res = await fetch("../public/fotos.json");
    const data = await res.json();
    const photos = data.map((photo) => {
      return { ...photo, src: photo.photo, liked: false };
    });
    setFotos(photos);
  };

  useEffect(() => {
    getFotos();
  }, []);

  const estadoGlobal = {
    fotos,
    setFotos,
  };
  return <Context.Provider value={estadoGlobal}> {children} </Context.Provider>;
}
