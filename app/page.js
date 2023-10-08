"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/config/fbConfig";

function Page() {
  const [courses, setCourses] = useState([]);

  const fetchData = async () => {
    try {
      const collectionName = collection(db, "course");
      const docs = await getDocs(collectionName);
      const courseData = [];
      docs.forEach((doc) => {
        console.log(doc.data());
        courseData.push({
          ...doc.data(),
        });
      });
      setCourses(courseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <h1>{course.name}</h1>
          <h2>{course.code}</h2>
          <p>{course.desc}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Page;
