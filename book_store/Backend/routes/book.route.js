

import express,{ Router } from "express";
import { getAllBooks,createBooks,updateBooks ,deleteBook,findBook} from "../controllers/book.controller.js";

const router = express.Router()

router.get('/', getAllBooks)
router.post('/', createBooks)
router.put('/:id',updateBooks)
router.delete('/:id',deleteBook)
router.get("/:id",findBook)


export default router;


