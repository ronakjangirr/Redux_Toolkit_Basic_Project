import React from 'react';
import { useSelector } from 'react-redux';
import StudentItem from "./StudentItem";

function Students() {
  let  students = useSelector((state)=>state.student.students);
  console.log(students);
    return (
    <>
      <div>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
      </div>
    </>
  )
}

export default Students;