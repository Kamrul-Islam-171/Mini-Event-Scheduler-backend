import { Request, Response } from 'express';
import { TEvent } from '../models/eventModel';
import { Categorize } from '../utils/categorize';

let events:TEvent[] = []

const AddEvents = async (req: Request, res: Response) => {
  try {
    const { title, date, time, notes } = req.body;
    // console.log(req.body)
    const text = `${title} ${notes || ''}`
    // checking category
    const category = Categorize(text);
    // console.log("cate = ", category)
    const newEvent:TEvent = {
      title,
      date,
      time,
      notes,
      archived:false,
      category
    } 
    events.push(newEvent);
    // console.log(events)
    res.status(201).json({
      success:true,
      message:"Event created Successfully",
      data: newEvent});

  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

export const EventController = {
  AddEvents,
};
