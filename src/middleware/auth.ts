import config from "config";
import jwt from "jsonwebtoken";
import express from "express";

export default function auth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  //checkfor token
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "Authorization denied" });
  }
  try {
    //verify token
    const decoded = jwt.verify(token, config.get("JwtSecret"));
    //Add user from payloag.
    (req as any).jwtDecod = decoded;
    next();
  } catch (e) {
    return res.status(400).json({ msg: "Invalid token" });
  }
}
