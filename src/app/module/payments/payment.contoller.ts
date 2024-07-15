import { Request, Response } from "express";
import catchAsync from "../../ultils/CatchAsync";
import sendResponse from "../../ultils/sendRespons";
import httpStatus from "http-status";
import { PaymentService } from "./payment.services";

const paymentIntent = catchAsync(async (req: Request, res: Response) => {
  const { amount } = req.body;
  const tk = parseFloat(amount)
  console.log(req.body, "tk",tk)
  const {client_secret} = await PaymentService.paymentIntent(tk);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment is created succesfully",
    data: {client_secret},
  });
});
const postPayment = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await PaymentService.createPayment(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment is created succesfully",
    data: result,
  });
});

const getAllPayment = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const result = await PaymentService.getPayment(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment is fetch succesfully",
    data: result,
  });
});
const getSinglePayment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PaymentService.getSinglePayment(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment is fetch succesfully",
    data: result,
  });
});
const updatePayment = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const result = await PaymentService.updatePayment(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment is updated succesfully",
    data: result,
  });
});

export const PaymentController = {
  postPayment,
  getAllPayment,
  getSinglePayment,
  updatePayment,
  paymentIntent,
};
