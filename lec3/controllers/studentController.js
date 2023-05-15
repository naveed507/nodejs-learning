const allStudents = (req, res) => {
    return res.send("All Student");
}

const deleteStudent = (req, res) => {
    const {id} = req.params
    if(id == 10){
        return res.send("student Deleted")
    } else{
        return res.send("Student Does not deleted")
    }
}

export {allStudents, deleteStudent}