import axios from 'axios'
import React from 'react'
import { MdDelete } from "react-icons/md"

import "../styles/delposts.css"

const Deletepost = (id) => {

    const del = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/data/${id.id}`)
            console.log(res)
        } catch (err) {
            console.log(err)
            alert("Something went wrong. Couldn't delete the story")
        }
        
    }


  return (
    <>
        <MdDelete onClick={del} id='del' />
    </>
  )
}

export default Deletepost