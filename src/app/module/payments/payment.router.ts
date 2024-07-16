import { Router } from "express";
import { PaymentController } from "./payment.contoller";
import { RequestValidation } from "../../middelware/RequestValidation";
import { paymentValidation } from "./payment.validation";

const router = Router()
router.post("/payment-intent", PaymentController.paymentIntent)
router.post("/create-payment",RequestValidation(paymentValidation), PaymentController.postPayment)
router.get("/", PaymentController.getAllPayment)
router.get("/:id", PaymentController.getSinglePayment)
router.patch("/:id", PaymentController.updatePayment)

export const PaymentRouter = router 