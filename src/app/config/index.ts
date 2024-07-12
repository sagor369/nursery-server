import dotenv from "dotenv";
import path from 'path'


dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
    port : process.env.PORT,
    client_secrete : process.env.CLINE_SECRETE,
    database_url: process.env.DATABASE_URL

}