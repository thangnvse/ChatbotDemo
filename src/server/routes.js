import { Router } from 'express';

const router = new Router();

// routes
router.use('/example', require('./api/examples').default);

export default router;
