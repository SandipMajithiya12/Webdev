import { useState } from "react";

const Home = () => {
  const [blogs ,setBlog] = useState([
    {
      title : 'my new website', body : 'lorem..', author : 'yash', id :1
    },
    {
      title : 'my new website', body : 'lorem..', author : 'sandip', id :3
    },
    {
      title : 'my new website', body : 'lorem..', author : 'harsh', id :2
    }
  ]);
  return (
    <div className="home">
     {blogs.map((blog)=>
     (
      <div className="blog-preview" key={blog.id}>

        <h2>{blog.title}</h2>
        <p>writen by {blog.author} </p>
      </div>
     )
     )}
    </div>
  );
};

export default Home;
