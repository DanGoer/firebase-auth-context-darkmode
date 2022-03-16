import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reset from "./pages/reset/Reset";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { User } from "./ts/interfaces/global_interfaces";
import { useAuthContext } from "./utility/AuthContextProvider";
import Info from "./pages/info/Info";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { userData, setUserData } = useAuthContext();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email;

        const newUser: User = { uid, email };

        setUserData(newUser);
      }
    });
  }, [auth]);

  return (
    <Routes>
      <Route path="/info" element={<Info />} />
      {!userData && <Route path="/" element={<Login />} />}
      {!userData && <Route path="/register" element={<Register />} />}
      {!userData && <Route path="/reset" element={<Reset />} />}
      {!userData && <Route path="*" element={<Login />} />}

      {userData && <Route path="/" element={<Welcome />} />}
      {userData && <Route path="*" element={<Welcome />} />}
    </Routes>
  );
}

export default App;
