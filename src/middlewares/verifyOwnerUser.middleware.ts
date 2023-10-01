import { Response, Request, NextFunction } from "express";

const verifyOwnerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (req.user.userId !== id) {
    return res.status(401).json({
      message: "Owner required",
    });
  }

  return next();
};

export default verifyOwnerUserMiddleware;
