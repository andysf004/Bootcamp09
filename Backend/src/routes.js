import { Router } from 'express';
// import UserController from "./app/controller/userController";
import StudentsController from './app/controller/studentsController';
import SessionsController from './app/controller/sessionController';
import PlanController from './app/controller/planController';
import EnrollmentController from './app/controller/enrollmentController';
import CheckinController from './app/controller/checkinController';
import HelpController from './app/controller/helpController';
import SessionMobileController from './app/controller/sessionMobileController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/session', SessionsController.store);
routes.post('/sessionMobile', SessionMobileController.store);

routes.use(authMiddleware);
routes.get('/students/:name', StudentsController.show);
routes.get('/students', StudentsController.show);

routes.post('/students', StudentsController.store);
routes.put('/students', StudentsController.update);
routes.delete('/students', StudentsController.delete);

routes.get('/plan/:title', PlanController.show);
routes.get('/plan', PlanController.show);
routes.post('/plan', PlanController.store);
routes.put('/plan', PlanController.update);
routes.delete('/plan', PlanController.delete);

routes.get('/enrollment', EnrollmentController.show);
routes.post('/enrollment', EnrollmentController.store);
routes.put('/enrollment', EnrollmentController.update);
routes.delete('/enrollment/', EnrollmentController.delete);

routes.get('/students/:id/checkin', CheckinController.show);
routes.post('/students/:id/checkin', CheckinController.store);

routes.get('/students/:id/help-orders', HelpController.show);
routes.get('/help-orders', HelpController.show);
routes.post('/students/:id/help-orders', HelpController.store);
routes.put('/students/help-orders/:id/answer', HelpController.update);

export default routes;
