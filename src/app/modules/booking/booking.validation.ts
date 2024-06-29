import { z } from "zod";

const carBookingValidationSchema = z.object({
    body: z.object({
        carId: z.string({
            invalid_type_error: "Car ID must be a string",
            required_error: "Car ID is required"
        }),
        date: z.string({
            invalid_type_error: "Date must be a string",
            required_error: "Date is required"
        }),
        startTime: z.string({
            invalid_type_error: "Start time must be a string",
            required_error: "Start time is required"
        })
    })
})




export const BookingValidation = {
    carBookingValidationSchema,
}