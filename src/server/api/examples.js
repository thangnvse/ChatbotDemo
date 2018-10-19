import { Router } from 'express';

const router = Router();

router.get('/all', (req, res) => {
  res.status(200).send('all');
});

export default router;
