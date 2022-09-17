import express, { request } from 'express'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

import { getData, postData, foundData, deleteData, patchData } from '../routesLogic.js/users.js';

const router = express.Router()

router.get('/', getData)
router.post('/', postData)
router.get('/:id', foundData)
router.delete('/:id', deleteData)
router.patch('/:id', patchData)

export default router