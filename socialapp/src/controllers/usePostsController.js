import { useState, useEffect } from "react";
import { fetchAllData } from "../models/api";

export const usePostsController = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData().then(({ users, posts, comments }) => {

      const combined = posts.map(post => {
        const user = users.find(u => u.id === post.userId);
        const postComments = comments.filter(c => c.postId === post.id);

        return {
          ...post,
          user,
          comments: postComments
        };
      });

      setData(combined);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};