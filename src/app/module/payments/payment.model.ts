import { model, Schema } from "mongoose";
import { TPayments, TProducts } from "./payment.interface";

const productSchema = new Schema<TProducts>({
product: {
    type: Schema.Types.ObjectId,
    required: true 
},
quantity:{
    type: Number,
    required: true
}
})

const paymentSchema = new Schema<TPayments>({
    userId:{
        type: Schema.Types.ObjectId,
        required:true
    },
    amount:{
        type: Number,
        required:true 
    },
    quantitys: {
        type: Number,
        required: true 
    },
    paymentId:{
        type: String,
        required:true
    },
    products: {
      type:[productSchema],
      required: true
    }
}, {timestamps: true})

export const Payments = model<TPayments>("payments", paymentSchema)