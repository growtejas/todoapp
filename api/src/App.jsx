import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>{7
      setData(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
  }, [])

  if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Something went wrong</p>;
}

  return (
  <div>
    {data.slice(0, 10).map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))}
  </div>
);

}

export default App
