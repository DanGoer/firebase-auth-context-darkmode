import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../utility/AuthContextProvider"
function Info() {
  const { userData } = useAuthContext()
  const navigate = useNavigate()

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-start space-y-10 text-lg w-72">
        <h1 className="font-bold text-2xl">Info:</h1>
        <p className="flex flex-col">
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
  )
}

export default Info
