import express from 'express';
import {
  createRoom,
  deleteRoom,
  getOneRoom,
  getRooms,
  renameRoom,
} from '../controllers/room.controller.js';

export const roomsRoute = express.Router();

roomsRoute.get('/', getRooms);
roomsRoute.get('/:id', getOneRoom);
roomsRoute.post('/', createRoom);
roomsRoute.delete('/:id', deleteRoom);
roomsRoute.patch('/:id', renameRoom);
