import { z } from "zod";


const createCarValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Name must be a string",
            required_error: "Name is required"
        }),
        description: z.string({
            invalid_type_error: "Description must be a string",
            required_error: "Description is required"
        }),
        color: z.string({
            invalid_type_error: "Color must be a string",
            required_error: "Color is required"
        }),
        isElectric: z.boolean({
            invalid_type_error: "isElectric must be a boolean",
            required_error: "isElectric is required",
        }),
        features: z
            .array(z.string({
                invalid_type_error: "Features must be string"
            }))
            .nonempty({
                message: "Features are required and must contain at least one feature",
            }),
        pricePerHour: z
            .number()
            .positive({ message: "Price per hour must be a positive number" })
    })
});


export const CarValidation = { createCarValidationSchema }