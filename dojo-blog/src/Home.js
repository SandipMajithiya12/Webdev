import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs ,setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
   
    useEffect(() =>{
     setTimeout(()=>{
      fetch('http://localhost:8000/blogs')
     .then (res => {
      return res.json();
     })
     .then(data =>{
      setBlog(data);
      setIsPending(false);
     });
     },1000)
    },[]);
 
  return (
    <div className="home">
      {
        isPending && <div>Lodaing...</div>
      }
     {blogs && <BlogList blogs = {blogs} title = "All blogs!" />}
     
    </div>
  );
};

export default Home;