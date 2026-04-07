export const fetchAllData = async () => {
  const [users, posts, comments] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/comments").then(r => r.json())
  ]);

  return { users, posts, comments };
};