import express from "express";

import{
    test, //REMOVE LATER
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get('/', test) //REMOVE LATER
router.get('/:id', getUser)
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;

//81-82