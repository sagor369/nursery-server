import { model, Schema } from "mongoose";
import { TPlants } from "./plants.interface";

const plantsSchema = new Schema<TPlants>({
  name: { 
    type: String, 
    required: true 
},
description: {
    type: String,
    required: true 
},
price: {
    type: Number,
    required: true 
},
quantity: {
    type: Number,
    required: true 
},
imageUrl: {
    type: String,
    required: true 
},
categoryId:{
    type: Schema.Types.ObjectId,
    required: true
},
isDelete:{
     type: Boolean,
     default: false
}
},
{
    timestamps: true
}
);

export const Plants = model('plants', plantsSchema)

