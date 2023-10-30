import React, { useEffect, useState } from 'react'

const Notes = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
fetch("https://fuzzy-bull-pajamas.cyclic.app/notes/",{
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
    method:"GET"
}).then(res=>res.json())
.then(res=>{
    setData(res)
console.log(res)
})
.catch(err=>console.log(err))
    },[])
    //console.log(data)
    if(data.length===0){
        return(
            <h1>No Any Note is created Yet!!</h1>
        )
    }
  return (
    <div><h3>Notes</h3>
    
        {data?.map((item)=>(
            <div key={item._id}>
            <h4>{item.title}</h4>
            <h5>{item.body}</h5>
            <p>User is: {item.username}</p>
            <button>Delete</button>
            <button>Update</button>
            </div>
        ))}
    </div>
    
    
    
  )
}

export default Notes