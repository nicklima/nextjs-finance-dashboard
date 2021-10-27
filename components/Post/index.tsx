import React from "react";
import ReactMarkdown from "react-markdown";

import { PostProps } from "interfaces"
import Route from "components/Router"

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <Route page="/p/[id]" slug={`/p/${post.id}`}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown source={post.content} />
    </Route>
  );
};

export default Post;
