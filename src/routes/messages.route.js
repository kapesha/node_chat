import express from 'express';
import { getMessages, postMessage } from '../controllers/message.controller.js';

export const messagesRoute = express.Router();

messagesRoute.get('/', getMessages);
messagesRoute.post('/', postMessage);
