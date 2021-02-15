import mongoose from "mongoose";
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
    const newBug = new BugsModel({
        ...bug,
        creator: req.userId,
        createdAt: new Date().toISOString()
    });
    try {
        await newBug.save();
        res.status(201).json(newBug);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};


export const updateBug = async (req, res) => {
    const { id } = req.params;
    const bug = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No bug with id: ${id}`);

    const updatedBug = await BugsModel.findByIdAndUpdate(id, bug, {new: true});

    res.json(updateBug);
}


export const deleteBug = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No bug with id: ${id}`);

    await BugsModel.findByIdAndDelete(id);

    res.json({ message: "Post deleted successfully." });
}