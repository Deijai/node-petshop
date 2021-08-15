import { Router, Response, Request } from 'express';
import * as HomeController from '../controllers/petshopController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', HomeController.index);
router.get('/dog', HomeController.dog);
router.get('/cat', HomeController.cat);
router.get('/fish', HomeController.fish);

router.get('/search', SearchController.index);
router.post('/search', SearchController.searchAction)



export default router;