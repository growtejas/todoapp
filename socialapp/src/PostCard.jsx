function PostCard({ post }) {
  return (
    <div className="post-card">
      <p>Post</p>
      <div className="post-user"> User Name - {post.user.name}</div>
      <p>Title</p>
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.body}</div>

      <div className="comments">
        <p>Comments</p>
        {post.comments.map((c) => (
          <div className="comment" key={c.id}>
            {c.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
