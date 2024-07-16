import { Types } from "mongoose"

export type TProducts = {
    product: Types.ObjectId
    quantity: number
    totalAmount: number
    
}

export type TPayments = {
    email : string
    products: TProducts[]
    quantitys: number
    paymentId: string
    totalAmount:number
}