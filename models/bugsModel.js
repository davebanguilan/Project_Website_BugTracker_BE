import mongoose from 'mongoose';

const bugsSchema = mongoose.Schema({
    title: String,
    name: String,
    description: String,
    project: String,
    members: [String],
    creator: String,
    severity: String,
    status: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const BugsModel = mongoose.model('BugsModel', bugsSchema);

export default BugsModel; 
