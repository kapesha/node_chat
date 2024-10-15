import { Message } from '../models/Message.model.js';
import { EventEmitter } from 'events';

export const emitter = new EventEmitter();

export const getMessages = async (req, res) => {
  const whereClauses = {};
  const { roomId } = req.query;
  whereClauses.roomId = roomId;
  res.send(await Message.findAll({ where: whereClauses }));
};

export const postMessage = async (req, res) => {
  const { text, author, roomId } = req.body;
  const message = {
    text,
    time: new Date().toString(),
    author,
    roomId,
  };

  await Message.create(message);
  emitter.emit('message', message);
  res.status(201).send(message);
};
