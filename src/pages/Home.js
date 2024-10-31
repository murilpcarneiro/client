import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let history = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, [])

  return (
    <div className="home">
      {listOfPosts.map((value, key) => {
        return <div className='post' onClick={() => { history(`/post/${value.id}`) }}>
          <div className='title'>
            {value.title}
          </div>
          <div className='body'>
            <p>
              {value.postText}
            </p>
          </div>
          <div className='footer'>
            Posted by: {value.username}
          </div>
        </div>
      })}
    </div>
  )
}

export default Home
