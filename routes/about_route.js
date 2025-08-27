const router=require('express').Router();
const aboutController = require('../controller/about_controller');

router.get('/about', aboutController.getAboutPage)
router.post('/about', aboutController.postAboutPage)

module.exports = router;
