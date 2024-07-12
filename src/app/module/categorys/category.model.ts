import { model, Schema } from "mongoose";
import { TPlantCategory } from "./category.interface";

const categorySchema = new Schema<TPlantCategory>({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      isDelete:{
        type: Boolean,
        default: false
      },
      imageUrl: {
        type: String,
        required: true
      }
}, {timestamps: true})

export const Categorys = model<TPlantCategory>("categorys", categorySchema)