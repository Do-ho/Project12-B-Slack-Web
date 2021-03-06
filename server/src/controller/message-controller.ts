import HttpStatusCode from '@constants/http-status-code';
import MessageService from '@service/message-service';
import { NextFunction, Request, Response } from 'express';

const messageController = {
  async getMessages(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatRoomId } = req.params;
      const { offsetId } = req.query;
      const messages = await MessageService.getInstance().getMessages(Number(chatRoomId), Number(offsetId));
      res.status(HttpStatusCode.OK).json(messages);
    } catch (err) {
      next(err);
    }
  },
  async createMessage(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { chatRoomId, content } = req.body;
    try {
      const messageId = await MessageService.getInstance().createMessage(Number(userId), Number(chatRoomId), String(content));
      res.status(HttpStatusCode.CREATED).json(messageId);
    } catch (err) {
      next(err);
    }
  },
  async updateMessage(req: Request, res: Response, next: NextFunction) {
    const { content } = req.body;
    const { messageId } = req.params;
    try {
      await MessageService.getInstance().updateMessage(Number(messageId), String(content));
      res.status(HttpStatusCode.CREATED).json(messageId);
    } catch (err) {
      next(err);
    }
  },
  async deleteMessage(req: Request, res: Response, next: NextFunction) {
    const { messageId } = req.params;
    try {
      await MessageService.getInstance().deleteMessage(Number(messageId));
      res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (err) {
      next(err);
    }
  }
};

export default messageController;
