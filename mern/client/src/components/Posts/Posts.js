import React from "react";
import { useSelector } from 'react-redux';

import Post from "./Post/Post";
import useStyles from "./styles";

export default function Posts() {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
}
