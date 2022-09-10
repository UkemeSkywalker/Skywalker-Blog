const Navbar = () => {
  return (
    <nav className="navbar flex flex-row place-content-center pt-4 pb-3 justify-evenly">
      <h1 className="ml:auto">The Skywalker Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" className="ml-6 color bg-cyan-500 p-2 rounded" >New Post</a>
      </div>
    </nav>
  )
}

export default Navbar
