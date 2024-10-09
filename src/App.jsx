import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";
const fakePosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "I Built A Successful Blog In One Year",
    description: "I am a full-stack developer and an entrepreneur. I have been working on web development for the last 5 years. I have worked with many startups and established companies to build web applications that solve real-world problems.",
    userImage: "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
    username: "John Doe",
    date: "21 SEP 2015"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "How I Achieved Financial Freedom in 5 Years",
    description: "Finalcial freedom is a dream for many people. It means you can live a life without worrying about money. You can do what you want, when you want, without having to worry about the financial implications.",
    userImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
    username: "Jane Smith",
    date: "12 OCT 2020"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "My Journey to Becoming a Digital Nomad",
    description: "This is a story about how I became a digital nomad. I quit my job, sold all my belongings, and hit the road with nothing but a backpack and a laptop. I traveled the world, working from my laptop, and living life on my own terms.",
    userImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
    username: "Michael Lee",
    date: "18 NOV 2018"
  }
];
function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  console.log(user);

  return (
    <>
      {user ? (
        <div className="flex flex-col w-full max-w-7xl mx-auto p-6 space-y-4 text-center bg-gray-50 text-gray-800">
          <Navbar/>
          <h1 className="text-3xl font-semibold">Welcome {user}</h1>
          <button
            onClick={() => setUser(null)}
            type="button"
            className="px-8 py-3 space-x-2 font-semibold rounded bg-teal-700 text-gray-50"
          >
            Sign out
          </button>
          {
            fakePosts.map((post) => (
              <Card key={post.id} post={post} />
            ))
          }
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
