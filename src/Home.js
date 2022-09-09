const Home = () => {

    const clickHandler = (e) => {
        console.log("Infinito!", e.view.alert.name)
    }

    const onclickHandler = (name, e)=> {
        console.log("Hello" + name, e.target)
    }

    return ( 
        <div>
            <h2>Home</h2>
            <button onClick={clickHandler}>Click me</button>
            <button onClick={(e) => {onclickHandler("Ukeme", e)}}>Click Me Again</button>
        </div>
     );
}
 
export default Home;