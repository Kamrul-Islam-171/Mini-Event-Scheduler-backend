import express from 'express';
import validateRequest from '../middleware/ValidateRequest';
import { EventValidation } from '../Validation/eventValidation';
import { EventController } from '../controller/eventController';

const router = express.Router();

router.post('/events', validateRequest(EventValidation.eventValidationSchema), EventController.AddEvents)

export const EventRoutes = router;