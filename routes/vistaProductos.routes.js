import express from 'express';
import { vistaProductos, getProductos } from '../controller/vistaProductos.js';

const router = express.Router();
// '/'  === '/login'
router.get('/', vistaProductos )
router.get( '/:id', getProductos );

export default router;