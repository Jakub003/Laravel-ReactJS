import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './home.scss';
// import axios from 'axios';

const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/")
//       .then((response) => setData(response.data))
//       .catch((error) => console.error(error));
//   }, []);

// console.log(data)

const posts = [
  {
    id: 1,
    title: 'hello',
    desc: "this is desc"
  },
  {
    id: 2,
    title: 'hello',
    desc: "this is desc"
  },
  {
    id: 3,
    title: 'hello',
    desc: "this is desc"
  }
];

  return (
    <div className='home'>
      {posts.map(post => (
          <Card
          key={post.id}
          title={post.title}
          desc={post.desc}
          />
      ))
      }
    </div>
  )
}

export default Home