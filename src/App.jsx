import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setUser(null);

      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}`,
      );

      if (response.status === 404) {
        throw new Error("User not found");
      }

      if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded");
      }

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setUser(data);
    } catch (error) {
      setUser(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          GitHub User Search
        </h1>

        <SearchBar
          username={username}
          onUsernameChange={setUsername}
          onSearch={handleSearch}
          loading= {loading}
        />

        {loading && <p className="text-center">Loading...</p>}

        {error && <p className="text-center text-red-500">{error}</p>}

        {user && <UserCard user={user} />}
      </div>
    </div>
  );
}
