import Joi from "joi";

const username = Joi.string().alphanum().min(3).max(25).trim().required();
const password = Joi.string()
  .pattern(
    /^(?=(?:.*[A-Z]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*\d){1,})(?=(?:.*[@$!%*?&_.-]){1,})([A-Za-z0-9@$!%*?&_.-]{16,50})$/
  )
  .required()
  .messages({
    "string.pattern.base": "Invalid password",
  });
const email = Joi.string().email().required();

export const UserPostSchema = Joi.object({
  username,
  password,
  email,
});

export const UserLoginSchema = Joi.object({
  username,
  password,
});
