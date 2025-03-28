import axios from "axios";

export async function getUsers(token) {
  const res = await axios.get("http://20.244.56.144/test/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  const usersObj = res.data.users;
  const usersArray = Object.entries(usersObj).map(([id, name]) => ({
    id,
    name,
    image: `https://randomuser.me/api/portraits/lego/${id}.jpg`, // You can add any dummy image here
  }));
  
  console.log("Processed Users:", usersArray);
  return usersArray;
  
}


export async function getUserPosts(userId, token) {
  const res = await axios.get(`http://20.244.56.144/test/users/${userId}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.posts;
}

export async function getPostComments(postId, token) {
  const res = await axios.get(`http://20.244.56.144/test/posts/${postId}/comments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.comments;
}
