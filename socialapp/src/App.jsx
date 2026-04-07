import { usePostsController } from "./controllers/usePostsController";
import PostList from "./PostList";
import './App.css';
function App() {
  const { data, loading } = usePostsController();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app">
      <PostList posts={data} />
    </div>
  );
}

export default App;
