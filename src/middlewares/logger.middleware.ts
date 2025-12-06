import type { NextFunction, Request, Response } from "express";

export const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`Request masuk: ${req.method} ${req.path}`);

  // Log semua headers
  console.log("Headers:", req.headers);

  // Simpan waktu mulai request
  req.startTime = Date.now();

  next();
};
