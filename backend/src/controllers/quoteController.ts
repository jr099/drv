import { Request, Response } from 'express';
import { createQuoteRequest, listQuotes, updateQuoteStatus } from '../services/quoteService.js';
import { AuthenticatedRequest } from '../middlewares/authMiddleware.js';

export const createQuote = async (req: Request, res: Response) => {
  const requesterId = (req as AuthenticatedRequest).user?.id;
  const quote = await createQuoteRequest(req.body, requesterId);
  res.status(201).json(quote);
};

export const getQuotes = async (_req: Request, res: Response) => {
  const quotes = await listQuotes();
  res.json(quotes);
};

export const changeQuoteStatus = async (req: Request, res: Response) => {
  const { status } = req.body as { status: 'NEW' | 'IN_REVIEW' | 'ACCEPTED' | 'REJECTED' };
  const quote = await updateQuoteStatus(req.params.quoteId, status);
  res.json(quote);
};
