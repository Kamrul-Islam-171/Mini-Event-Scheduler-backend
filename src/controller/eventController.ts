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
    return res.status(201).json({
      success: true,
      message: 'Event created Successfully',
      data: newEvent,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error?.message,
    });
  }
};
const GetEvents = async (req: Request, res: Response) => {
  try {
    const sortedEvents = [...events].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      // console.log(dateA, dateB);
      return dateA.getTime() - dateB.getTime();
    });

    // console.log(sortedEvents)

    return res.status(201).json({
      success: true,
      message: 'Events retrive Successfully',
      data: sortedEvents,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error?.message,
    });
  }
};
const GetSingleEvents = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    let event = events.filter((e) => e.id == id);
    if (!event[0]) {
      return res.status(404).json({
        message: 'Event not found!',
      });
    }


    return res.status(201).json({
      success: true,
      message: 'Events Details Retrive Successfully',
      data: event[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error?.message,
    });
  }
};
const UpdateEvent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    // console.log("id = ", id)
    let event = events.filter((e) => e.id == id);
    if (!event[0]) {
      return res.status(404).json({
        message: 'Event not found!',
      });
    }

    // console.log(event)
    if(event[0].archived) event[0].archived = false;
    else event[0].archived = true;

    // event[0].archived = true;

    return res.status(201).json({
      success: true,
      message: 'Events updated Successfully',
      data: event[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error?.message,
    });
  }
};
const DeleteEvent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const event = events.filter((e) => e.id == id);
    if (!event[0]) {
      return res.status(404).json({
        message: 'Event not found!',
      });
    }

    events = [...events].filter((e) => e.id !== id);

    return res.status(201).json({
      success: true,
      message: 'Events deleted Successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error?.message,
    });
  }
};

export const EventController = {
  AddEvents,
  GetEvents,
  UpdateEvent,
  DeleteEvent,
  GetSingleEvents
};
