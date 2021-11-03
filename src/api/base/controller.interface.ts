import { Router } from "express";

export interface Controller {
  getPath(): string
  getRouter(): Router
}