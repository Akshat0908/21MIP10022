import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getUsers, getUserPosts } from "../api/dataService";
import { getAuthToken } from "../api/auth";

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchFeed = async () => {
    try {
      const token = await getAuthToken("6ddda76f-b8dd-4f00-ada7-439f27a26d02", "thULcoJOhOtuSXpW");
      const users = await getUsers(token);

      const allPosts = [];
      for (let user of users) {
        const userPosts = await getUserPosts(user.id, token);
        userPosts.forEach((post) =>
          allPosts.push({
            ...post,
            user: { name: user.name, image: user.image },
          })
        );
      }
      setPosts(allPosts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFeed();
    const interval = setInterval(fetchFeed, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Live Feed</h2>
      {posts.map((post) => (
        <PostCard key={post.id} content={post.content} image={post.image} user={post.user} />
      ))}
    </div>
  );
}

export default Feed;
