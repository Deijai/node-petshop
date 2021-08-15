import { Router, Response, Request } from 'express';
import * as HomeController from '../controllers/petshopController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', HomeController.index);
router.get('/dogs', HomeController.dog);
router.get('/cats', HomeController.cat);
router.get('/fishes', HomeController.fish);

router.get('/search', SearchController.index);
router.post('/search', SearchController.searchAction)



export default router;