import { Types } from "mongoose"

export type TProducts = {
    product: Types.ObjectId
    quantity: number
    
}

export type TPayments = {
    userId : Types.ObjectId
    products: TProducts[]
    amount: number
    quantitys: number
    paymentId: string
}