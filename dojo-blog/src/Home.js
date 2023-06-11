const Home = () => {
    const handleclick = () =>{
        console.log('hello');
    }
    const handleclickAgain = (name) =>{
        console.log('hello' + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleclick}>click me</button>
            <button onClick={()=>{
                handleclickAgain('sandip')
            }}>clickAgain</button>
        </div>
     );
}
 
export default Home;