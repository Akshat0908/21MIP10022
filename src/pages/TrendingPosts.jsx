import React, { useEffect, useState } from "react";
import { getUsers, getUserPosts, getPostComments } from "../api/dataService";
import { getAuthToken } from "../api/auth";
import PostCard from "../components/PostCard";

function TrendingPosts() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const token = await getAuthToken("6ddda76f-b8dd-4f00-ada7-439f27a26d02", "thULcoJOhOtuSXpW");
        const users = await getUsers(token);

        const allPosts = [];
        for (let user of users) {
          const posts = await getUserPosts(user.id, token);
          for (let post of posts) {
            const comments = await getPostComments(post.id, token);
            allPosts.push({
              ...post,
              commentCount: comments.length,
              user: { name: user.name, image: user.image },
            });
          }
        }

        allPosts.sort((a, b) => b.commentCount - a.commentCount);
        setTrending(allPosts.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Trending Posts</h2>
      {trending.map((post) => (
        <PostCard key={post.id} content={post.content} image={post.image} user={post.user} />
      ))}
    </div>
  );
}

export default TrendingPosts;
