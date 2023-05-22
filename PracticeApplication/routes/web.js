
import express from 'express';
import connectEnsureLogin from 'connect-ensure-login';
const router = express.Router();
import HomeController from '../controllers/homeController.js';
import AuthController from '../controllers/authController.js';
router.get('/', HomeController.index);
router.get('/records',HomeController.recordsPage);
router.get('/icons',HomeController.iconsPage);
router.get('/tables',HomeController.tablePage);
router.get('/login',AuthController.loginform);
router.get('/register',AuthController.registerform);
router.get('/secret', connectEnsureLogin.ensureLoggedIn(), HomeController.secretPage);
router.post('/submitlogin', AuthController.submitLogin);
export default router;
