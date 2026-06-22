export default function SearchBar({
  username,
  onUsernameChange,
  onSearch,
  loading,
}) {
  return (
    <div className="flex gap-3 mb-8">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
        onChange={(e) => {
          onUsernameChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        value={username}
      />

      <button
        onClick={onSearch}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
