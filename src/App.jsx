import { partidos } from "../mockUp/partido";
import "./App.css";
import ErrorPage from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import { Partidos } from "./components/Partidos/Partidos";
import { useBuscarInfo } from "./hooks/useBuscarInfo";
import Alumnos from "./pages/Alumnos";

const App = () => {
  // const { data, loading, error } = useBuscarInfo();

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <ErrorPage error={error} />;
  // }
  // return <Alumnos data={data} />;
  // console.log(partidos.data)
  return (
    <Partidos partidos={partidos.data}/>
  )
};

export default App;
