import { v4 as uuid } from "uuid"

import "../styles/createpost.css"
import axios from "axios"


const Createpost = ({ createPostOpen, setCreatePostOpen, title, setTitle, content, setContent, name, setName }) => {

    const submit = async (e) => {
        e.preventDefault();

        const postSchema = {
            id: uuid(),
            name: name,
            title: title,
            content: content,
            date: new Date().toLocaleTimeString([], {day: "2-digit", month: "short", year: "numeric" ,hour: "2-digit", minute: "2-digit"})
        }
        try {
            if(title && content){
            const res = await axios.post("http://localhost:5000/data", postSchema)
            console.log(res.data)
            setName("")
            setTitle("")
            setContent("")
            setCreatePostOpen(false)
            }else{
                return alert("Both fields cannot be empty")
            }
        } catch (err) {
            console.log(err)
            alert("something went wrong. post cannot be created")
        }
    }

    return (
        <>
            {createPostOpen &&
                <div className="create-post_box">
                    <button onClick={() => setCreatePostOpen(false)}>Close</button>
                    <div className="box">
                        <input type="text" readOnly defaultValue="User(login auth will be made later)"
                         onChange={(e) => setName(e.target.value)}
                        />
                        <input required type="text" placeholder="Title"
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea required placeholder="Write content" 
                         value={content}
                         onChange={(e) => setContent(e.target.value)}
                        />
                        <div className="bottom-div">
                        <button onClick={submit}>Submit</button>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Createpost