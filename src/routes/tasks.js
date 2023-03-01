import { Router } from "express";
import { saveTask, deleteTask, getTask, getTaskCount, getTasks, updateTask } from "../controllers/tasks";

const router = Router();


/**
 * @swagger
 *  tags:
 *  name: Tasks
 * description: Tasks endpoind
 */

/**
 * @swagger 
 * /tasks:
 *   get:
 *    summary: get all tasks
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger 
 * /tasks/count:
 *  get:
 *   summary: count all tasks
 *   tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount);

/**
 * @swagger 
 * /tasks/id:
 *  get:
 *   summary: get a task by id
 *   tags: [Tasks]
 */
router.get("/task/:id", getTask);

/**
 * @swagger 
 * /tasks:
 *  post:
 *   summary: save one task
 *   tags: [Tasks]
 */
router.post("/tasks", saveTask);

/**
 * @swagger 
 * /tasks/id:
 *  delete:
 *   summary: erase a tasks by id
 *   tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger 
 * /tasks/id:
 *  put:
 *   summary: update a tasks by id
 *   tags: [Tasks]
 */
router.put("/tasks/:id", updateTask);



export default router;
  