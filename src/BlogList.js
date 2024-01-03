import { Link } from "react-router-dom"
const BlogList=({blogs,title})=>{
    return(
    <div className="blog-list">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain('mario',e)}>Click me again</button> */}
            <h2>{title}</h2>
            {blogs.map(blog=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Witten by {blog.author}</p>
                    </Link>

                </div>    
            ))}
            
    </div>)
}
export default BlogList