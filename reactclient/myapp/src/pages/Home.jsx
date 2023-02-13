import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './home.scss';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

console.log(data)

  return (
    <div className='home'>
      {data.map(post => (
          <Card
          key={data.id}
          title={data.title}
          desc={data.desc}
          />
      ))
      }
    </div>
  )
}

export default Home