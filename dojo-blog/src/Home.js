import { useState } from 'react';


const Home = () => {
    const [name , setName] = useState('mario');
    const [age,setAge] = useState(25);
    const handleclick = () =>{
        setName('sandip');
        setAge(45);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>



                { name } is {age} years old.
            </p>
            <button onClick={handleclick}>click me</button>
            
        </div>
     );
}
 
export default Home;