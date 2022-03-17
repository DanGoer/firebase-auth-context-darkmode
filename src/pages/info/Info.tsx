import { useNavigate } from "react-router-dom";
import ThemeToggle from "../../darkmode/ThemeToggle";
import { useAuthContext } from "../../utility/AuthContextProvider";
function Info() {
  const { userData } = useAuthContext();
  const navigate = useNavigate();

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100 dark:bg-slate-900">
      <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-start space-y-10 text-lg w-72 dark:bg-slate-700">
        <div className="flex flex-row justify-between w-full items-center">
          <h1 className="font-bold text-2xl dark:text-gray-300 ">Info:</h1>

          <ThemeToggle />
        </div>
        <p className="flex flex-col dark:text-gray-300">
          If you are logged in, you can see your email here:
          <span className="ml-1 mt-2 underline cursor-pointer hover:text-amber-500">
            {userData ? userData?.email : "you are not logged in"}
          </span>
        </p>
        <button
          className="px-7 py-1 border-2 bg-slate-100 text-lg border-slate-600 rounded-lg"
          onClick={() => navigate("/")}
        >
          Back to {userData ? "Welcome" : "Login"}
        </button>
      </div>
    </main>
  );
}

export default Info;
