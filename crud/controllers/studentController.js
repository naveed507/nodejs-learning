import StudentModel from "../models/studentModels.js"
class studentController {
    static getAllDoc = async (req, res)=> {
        try {
            const result = await StudentModel.find();
           
            res.render("index",{data: result})
        } catch (error) {
            console.log(error)
        }
      
    }

    static createDoc = async (req, res)=>{
        try {
            const {name,age,fees} = req.body    
            const doc  = new StudentModel({
                name: name,
                age: age,
                fees:fees
            })
            const result = await doc.save()
            res.redirect("/student")

        } catch (error) {
            console.log(error)
        }

    }

    static editDoc = async (req, res) =>{
        const result = await StudentModel.findById(req.params.id)
       
        res.render("edit", {data: result})
    }

    static updateDocById = async (req, res) =>{
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.render('/student')
        } catch (error) {
            console.log(error)
        }

        res.redirect("/student");
    }

    static deleteDocById = async (req, res) =>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }
}
export default studentController