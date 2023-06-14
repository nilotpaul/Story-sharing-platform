import axios from 'axios'
import React from 'react'
import { MdDelete } from "react-icons/md"

import "../styles/delposts.css"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_KEY

const Deletepost = (id) => {

    const del = async () => {
        try {
            const res = await axios.delete(`/data/${id.id}`)
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