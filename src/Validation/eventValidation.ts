import { z } from "zod";

const eventValidationSchema = z.object({
  body: z
    .object({
      title: z.string().min(1, 'Title is required'),
      date: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
      time: z
        .string()
        .regex(
          /^([01]\d|2[0-3]):([0-5]\d)$/,
          'Time must be in HH:MM (24-hour) format',
        ),
      notes: z.string().optional(),
    })
    .strict(),
});

export const EventValidation = {
    eventValidationSchema
}