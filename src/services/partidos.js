import { fetchContent } from "../utils/fetchContent";

export const ServicioPartidos = async () => {
  return await fetchContent("partidos");
};
