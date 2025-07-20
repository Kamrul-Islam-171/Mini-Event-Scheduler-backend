import { Request, Response } from 'express';
import { TEvent } from '../models/eventModel';
import { Categorize } from '../utils/categorize';


let events: TEvent[] = [];
let index = 1;
const AddEvents = async (req: Request, res: Response) => {
  try {
    const { title, date, time, notes } = req.body;

    const text = `${title} ${notes || ''}`;
    // checking category
    const category = Categorize(text);

    const newEvent: TEvent = {
      id: index,
      title,
      date,
      time,
      notes,
      archived: false,
      category,
    };
    events.push(newEvent);
    index += 1;
    // console.log(events)
    res.status(201).json({
      success: true,
      message: 'Event created Successfully',
      data: newEvent,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
};
const GetEvents = async (req: Request, res: Response) => {
  try {
    const sortedEvents = [...events].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      console.log(dateA, dateB);
      return dateB.getTime() - dateA.getTime();
    });

    // console.log(sortedEvents)

    res.status(201).json({
      success: true,
      message: 'Events retrive Successfully',
      data: sortedEvents,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
};
const UpdateEvent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const event = events.filter((e) => e.id == id);
    if (!event) {
      res.status(404).json({
        message: 'Event not found!',
      });
    }

    events[id - 1].archived = true;

    res.status(201).json({
      success: true,
      message: 'Events updated Successfully',
      data: events[id - 1],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
};
const DeleteEvent = async (req: Request, res: Response) => {
  try {
    
    const id = parseInt(req.params.id);
    const event = events.filter((e) => e.id == id);
    if (!event) {
      res.status(404).json({
        message: 'Event not found!',
      });
    }

    events = [...events].filter((e) => e.id !== id);

    res.status(201).json({
      success: true,
      message: 'Events deleted Successfully',
      
    });
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

export const EventController = {
  AddEvents,
  GetEvents,
  UpdateEvent,
  DeleteEvent
};
