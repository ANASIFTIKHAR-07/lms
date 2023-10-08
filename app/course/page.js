"use client"
import { useState } from "react"
import {addDoc, collection, getDoc} from "firebase/firestore"
import {db} from "@/config/fbConfig"
function StudentForm() {
  const [courseName , setCourseName]= useState("")
  const [courseCode , setCourseCode]= useState("")
  const [courseDesc, setCourseDesc] = useState("")

  const onSubmitHandler =async ()=>{
      let course ={
        name : courseName,
        code : courseCode,
        desc: courseDesc,
      }
      try {
        const collectionName = collection(db,"course")
   
        await addDoc(collectionName, course )
        console.log("Document written with ID: ", course);
     
      } catch (error) {
           console.log("error ", error)
      }
  }
  return (
    <div className="bg-blue-300 p-5 ">
      <div className="align-center">
        <h1>Select Course</h1>
   
      <label for="email"> Course Name</label>
      <input type="text" placeholder="enter the course name " id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setCourseName(e.target.value)} />
      <br />

      <label for="code"> Course Code</label>
      <input type="text"  placeholder="enter your course code " id="code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setCourseCode(e.target.value)} />
      <br />
      <label for='disc'> Course Description</label>
      <input type="text"  placeholder="enter your description " id="disc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setCourseDesc(e.target.value)} />
      <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5" onClick={onSubmitHandler}> submit</button>
      </div>

     

        
    </div>
   
  )
}

export default StudentForm