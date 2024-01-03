import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
import {useNavigate} from 'react-router-dom';

const Create=()=>{
    const [title,setTitle]=useState('hello')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('')
    const [isPending,setIsPending]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        //防止提交后自动刷新
        e.preventDefault();
        const blog ={title,body,author}
        setIsPending(true)
        console.log(blog)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            //navigate.go(-1)
            setIsPending(false)
            navigate('/')
        })
    }
    return(
        <div className="create">
            <h2>Add a New blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <input 
                    type="text" 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    )
}
export default Create