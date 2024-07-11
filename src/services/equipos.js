import { fetchContent } from "../utils/fetchContent";

export const ServicioEquipos = async () => {
  return await fetchContent("equipos");
};
