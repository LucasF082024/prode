//import { partidos } from "../mockUp/partido";
import "./App.css";
import ErrorPage from "./components/Error/Error";
import { Home } from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import { Partidos } from "./components/Partidos/Partidos";
import { useBuscarInfo } from "./hooks/useBuscarInfo";
import { loadUsersFromLocalStorage, saveUsersToLocalStorage } from "./utils/funcionesStorage";
import { createUser, users } from "./utils/procesarUsuario";


const storedUsers = loadUsersFromLocalStorage();
console.log(storedUsers);
if (storedUsers.length > 0) {
    storedUsers.forEach(user => users.push(user));
} else {
    const user = createUser(1, "Jon Snow", " ");
    users.push(user);
    saveUsersToLocalStorage(users);
}

const App = () => {
  const { data, loading, error } = useBuscarInfo();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }
  // return <Partidos partidos={data}/>;
  return (
    <Home
      data={data} 
      user={users[0]} 

    />
  )
};

export default App;