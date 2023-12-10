import mongoose ,{Schema} from "mongoose";

const doctorSchema = new Schema(
    {
        docter:string,
        collection : string
    },{
       timestamps:true, 
    }
);
const Topic = mongoose.models.docter || mongoose.model("Topic",doctorSchema);
export default Topic;