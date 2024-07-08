import { Types } from "mongoose"

export type TPlants = 
    {
        name: string          
        price: number           
        quantity: number        
        description: string     
        categoryId: Types.ObjectId      
        imageUrl: string       
      }