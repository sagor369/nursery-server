import { QueryBuilder } from "../../../builder/QueriBuilder";
import config from "../../config";
import { TPayments } from "./payment.interface";
import { Payments } from "./payment.model";
import stripe from "stripe";

const paymentIntent = async (amounts: number) => {
  const amount = amounts * 100;
  const stripes = new stripe(config.client_secrete as string);
  const paymentIntent = await stripes.paymentIntents.create({
    amount,
    currency: "usd",
  });
  return paymentIntent
};

const createPayment = async (payload: TPayments) => {
  const result = await Payments.create(payload);
  return result;
};
const getPayment = async (query: Record<string, unknown>) => {
  const searchField = ["userId", "productId", "paymentId"];
  const PaymentQuery = new QueryBuilder(Payments.find(), query)
    .search(searchField)
    .filter()
    .sort();
  const result = await PaymentQuery.modelQuery;
  return result;
};
const getSinglePayment = async (id: string) => {
  const result = await Payments.findById(id);
  return result;
};
const updatePayment = async (id: string, payload: Partial<TPayments>) => {
  const result = await Payments.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const PaymentService = {
  createPayment,
  getPayment,
  getSinglePayment,
  updatePayment,
  paymentIntent
};
