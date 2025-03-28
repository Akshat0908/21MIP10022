import React from "react";

function PostCard({ content, image, user }) {
  return (
    <div className="p-4 shadow rounded-2xl mb-4 bg-white">
      <div className="flex items-center gap-4 mb-2">
        <img src={user.image} alt="User" className="w-10 h-10 rounded-full" />
        <p className="font-semibold">{user.name}</p>
      </div>
      <img src={image} alt="Post" className="w-full rounded-xl mb-2" />
      <p>{content}</p>
    </div>
  );
}

export default PostCard;
