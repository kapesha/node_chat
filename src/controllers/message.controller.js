import { Message } from '../models/Message.model.js';
import { EventEmitter } from 'events';

const MESSAGE = 'message';

export const emitter = new EventEmitter();

export const getMessages = async (req, res) => {
  const whereClauses = {};
  const { roomId } = req.query;

  whereClauses.roomId = roomId;
  res.send(await Message.findAll({ where: whereClauses }));
};

export const postMessage = async (req, res) => {
  const { text, author, roomId } = req.body;

  if (!text || !author || !roomId) {
    res.status(400).send({ message: 'one of nessesery parys is required' });
  }

  const message = {
    text,
    time: new Date().toString(),
    author,
    roomId,
  };

  if (!message) {
    res.status(400).send({ message: 'message is required' });
  }
  await Message.create(message);
  emitter.emit(MESSAGE, message);
  res.status(201).send(message);
};
