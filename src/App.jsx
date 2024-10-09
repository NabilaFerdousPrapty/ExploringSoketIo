import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  console.log(user);

  return (
    <>
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-semibold">Sign in to your account</h1>

        <div className="flex flex-col">
          <label htmlFor="email" className="sr-only">
            User name
          </label>
          <input
            className="rounded-t-md border-gray-400 bg-gray-50 text-gray-800 focus:ring-tale-600 focus:border-indigo-600 focus:ring-2 py-4 px-8 "
            id="text"
            type="text"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button
          onClick={() => setUser(userName)}
          type="button"
          className="px-8 py-3 space-x-2 font-semibold rounded bg-teal-700 text-gray-50"
        >
          Sign in
        </button>
      </div>
    </>
  );
}

export default App;
