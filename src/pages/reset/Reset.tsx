import { useState } from "react"
import { Link } from "react-router-dom"
import { sendPasswordReset } from "../../utility/firebase"
import { useAuthContext } from "../../utility/AuthContextProvider"

function Reset() {
  const [email, setEmail] = useState<string>("")
  const { userData } = useAuthContext()

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-start space-y-10 text-lg w-72">
        <h1 className="font-bold text-2xl">Password-Reset:</h1>
        {userData && <div>ist da</div>}
        <div className="flex flex-col space-y-10 items-center">
          <p>
            Forgot your account’s password or having trouble logging into your
            Team? Enter your email address and we’ll send you a recovery link.
          </p>
          <input
            type="text"
            className="px-1 py-1 border-2 shadow-lg border-slate-400 w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button
            className="px-4 py-1 border-2 bg-slate-100 text-lg border-slate-600 rounded-lg"
            onClick={() => sendPasswordReset(email)}
          >
            Send recovery email
          </button>
        </div>
        <div>
          Don't have an account?{" "}
          <Link
            className="underline cursor-pointer hover:text-amber-500"
            to="/register"
          >
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </main>
  )
}

export default Reset
