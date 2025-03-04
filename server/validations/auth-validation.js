const {z} = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"Name must be more than 3 char"})
    .max(225,{message:"Name must be more than 225 char"}),
    email: z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Email is Invalid"})
    .min(3,{message:"Email must be more than 3 char"})
    .max(225,{message:"Email must be more than 225 char"}),
    password: z
    .string({required_error:"Password is Required"})
    .trim()
    .min(4,{message:"Password must be more than 3 char"})
    .max(1024,{message:"Password must be more than 225 char"}),
});
const loginSchema = z.object({
    email: z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Email is Invalid"})
    .min(3,{message:"Email must be more than 3 char"})
    .max(225,{message:"Email must be more than 225 char"}),
    password: z
    .string({required_error:"Password is Required"})
    .trim()
    .min(4,{message:"Password must be more than 3 char"})
    .max(1024,{message:"Password must be more than 225 char"}),
})
module.exports = {signupSchema,loginSchema} ;