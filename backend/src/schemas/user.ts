import Joi from "joi";

export const UserPostSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(25).trim().required(),
  password: Joi.string()
    .pattern(
      /^(?=(?:.*[A-Z]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*\d){1,})(?=(?:.*[@$!%*?&_.-]){1,})([A-Za-z0-9@$!%*?&_.-]{16,50})$/
    )
    .required(),
  email: Joi.string().email().required(),
});
