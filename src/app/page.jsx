"use client"

import { useState } from "react"

import Createpost from "@/components/Createpost"
import "../styles/homepage.css"
import Allposts from "@/components/Allposts"

export default function Home() {

  const [createPostOpen, setCreatePostOpen] = useState(false) // create posts open and close
  const [title, setTitle] = useState("")  // use state for taking the data
  const [content, setContent] = useState("") // for the content data
  const [name, setName] = useState("User") // sets the name of the user, this will later come from the database where profile data will be saved


  return (

    <>
      {createPostOpen ? <style dangerouslySetInnerHTML={{
        __html: `
         body{ background: #77969C }
        `}} /> : null}
      <div className="home-container">
        <div className="control-items">
          <button onClick={() => setCreatePostOpen(true)}>Create Post</button>
        </div>
        <Createpost
          createPostOpen={createPostOpen}
          setCreatePostOpen={setCreatePostOpen}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          name={name}
          setName={setName}
        />
        <h1>Recently published stories</h1>
        <div className="cards">
        <Allposts />
        </div>
        
      </div>
    </>
  )
}
