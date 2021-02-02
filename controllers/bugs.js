import BugsModel from '../models/bugsModel.js'

export const getBugs = async (req, res) => {
    try {
        const bugsData = await BugsModel.find();

        res.status(200).json(bugsData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createBug = async (req, res) => {
    const bug = req.body;
    const newBug = new BugsModel(bug);
    try {
        await newBug.save();
        res.status(201).json(newBug);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

