export default function UserCard({ user }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <img
          src={
            user
              ? user.avatar_url
              : "https://avatars.githubusercontent.com/u/9919?v=4"
          }
          alt={`${user.login} avatar`}
          className="w-32 h-32 rounded-full border-4 border-slate-700"
        />

        {/* User Info */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                {user.name || "user name not available"}
              </h2>
              <p className="text-blue-400">{user.login}</p>
            </div>

            <p className="text-slate-400 mt-2 md:mt-0">
              Joined{" "}
              {user?.created_at
                ? new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                  }).format(new Date(user.created_at))
                : "Loading..."}
            </p>
          </div>

          <p className="text-slate-300 mt-4">
            {user.bio || "No bio available"}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 bg-slate-950 rounded-xl p-4 mt-6">
            <div>
              <p className="text-slate-400 text-sm">Repos</p>
              <h3 className="text-xl font-bold">{user.public_repos}</h3>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Followers</p>
              <h3 className="text-xl font-bold">{user.followers}</h3>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Following</p>
              <h3 className="text-xl font-bold">{user.following}</h3>
            </div>
          </div>
        </div>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-center block mt-4 bg-blue-600 hover:bg-blue-700 rounded-xl py-3"
      >
        Github profile
      </a>
    </div>
  );
}
