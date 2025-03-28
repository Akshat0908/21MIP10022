import React, { useEffect, useState } from "react";
import { getUsers, getUserPosts } from "../api/dataService";
import { getAuthToken } from "../api/auth";

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAuthToken("6ddda76f-b8dd-4f00-ada7-439f27a26d02", "thULcoJOhOtuSXpW");
        const users = await getUsers(token);

        const userPostCounts = [];
        for (let user of users) {
          const posts = await getUserPosts(user.id, token);
          userPostCounts.push({ ...user, postCount: posts.length });
        }

        userPostCounts.sort((a, b) => b.postCount - a.postCount);
        setTopUsers(userPostCounts.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Top 5 Users</h2>
      {topUsers.map((user) => (
        <div key={user.id} className="p-4 shadow rounded-xl bg-white mb-2 flex items-center gap-4">
          <img src={user.image} alt="User" className="w-10 h-10 rounded-full" />
          <p className="font-semibold">{user.name}</p>
          <p className="ml-auto text-sm">Posts: {user.postCount}</p>
        </div>
      ))}
    </div>
  );
}

export default TopUsers;
