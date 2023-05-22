class authController {

    static loginform =(req, res)=>{
        try {
            res.render('pages/auth/loginform')
        } catch (error) {
            
        }
    }
    static registerform = (req, res)=>{
        try {
            res.render('pages/auth/registerform')
        } catch (error) {
            
        }
    }
    static submitLogin = (req, res)=>{
        try {
           const email = req.body;
           console.log(email);
        } catch (error) {
            console.log(error);
        }
    }

}

export default authController;