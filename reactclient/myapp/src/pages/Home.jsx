import React from 'react';
import Card from '../components/Card';
import './home.scss'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: 'Hey',
      desc: 'lorem ipsum lorem ipsum'
    },
    {
      id: 2,
      title: 'Hi',
      desc: 'lorem ipsum lorem ipsum'
    },
    {
      id: 3,
      title: 'Hello',
      desc: 'lorem ipsum lorem ipsum'
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