import React from 'react'
import './MainContent.css'
import Posts from './Posts'
import jsonData from '../Assets/mockData/index.json'
function MainContent() {
  return (
    <div className='posts'>
      {
        jsonData.map((post, index) => (
          <Posts
            id={index}
            date={post.date}
            readingTime={post.readingTime}
            title={post.title}
            description={post.description}
            claps={post.claps}
            claped={post.claped}
            liked={post.liked}
            image={post.image}
          />
        ))}
    </div>
  )
}

export default MainContent