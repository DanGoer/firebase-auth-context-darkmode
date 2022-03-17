import { useEffect, useState } from "react";
import { db, logout } from "../../utility/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthContext } from "../../utility/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [name, setName] = useState<string>("");
  const { userData, setUserData } = useAuthContext();
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("uid", "==", userData.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (!userData) {
      navigate("/");
    } else {
      fetchUserName();
    }
  }, []);

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100 dark:bg-slate-900">
      <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-start space-y-10 text-lg w-72 dark:bg-slate-700">
        <h1 className="font-bold text-2xl dark:text-gray-300">Welcome-Page:</h1>
        <p className="flex flex-col dark:text-gray-300">
          Logged in as:
          <span className="mx-2 text-rose-900 dark:text-gray-300">
            "{name}"
          </span>
          with email:
          <span className="mx-2 text-rose-900 dark:text-gray-300">
            "{userData.email}".
          </span>
        </p>
        <button
          className="px-4 py-1 border-2 bg-slate-100 text-lg border-slate-600 rounded-lg"
          onClick={() => {
            logout();
            setUserData(null);
          }}
        >
          Logout
        </button>
        <button
          className="px-7 py-1 border-2 bg-slate-100 text-lg border-slate-600 rounded-lg"
          onClick={() => navigate("/info")}
        >
          Info
        </button>
      </div>
    </main>
  );
}

export default Welcome;
