import { useState, useEffect } from "react";
import { formatearPartidos } from "../utils/darFormato";
import {ServicioEquipos, ServicioPartidos} from "../services/index"
export const useBuscarInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([ServicioEquipos(), ServicioPartidos()])
      .then(([equipos, partidos]) => {
        setData(formatearPartidos(equipos, partidos));
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);


  return {
    data,
    loading,
    error,
  };
};
