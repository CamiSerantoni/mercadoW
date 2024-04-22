import express from 'express';
import { vistaProductos} from '../controller/vistaProductos.js';

const router = express.Router();

router.get('/', vistaProductos )


export default router;