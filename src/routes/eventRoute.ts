import express from 'express';
import validateRequest from '../middleware/ValidateRequest';
import { EventValidation } from '../Validation/eventValidation';
import { EventController } from '../controller/eventController';

const router = express.Router();

router.post('/events', validateRequest(EventValidation.eventValidationSchema), EventController.AddEvents)
router.get('/events', EventController.GetEvents)
router.put('/events/:id', EventController.UpdateEvent)
router.delete('/events/:id', EventController.DeleteEvent)

export const EventRoutes = router;