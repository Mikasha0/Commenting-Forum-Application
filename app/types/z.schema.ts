import {z} from 'zod';

const zString = (
    minLength = 1,
    maxLength = 100,
    field = "name",
    minMessage = "should not be empty or less than",
    maxMessage = "should not be greater than "
  ) => {
    return z
      .string()
      .min(minLength, { message: field + " " + minMessage + " " + minLength })
      .max(maxLength, { message: maxMessage + " " + maxLength });
  };

export const userLoginSchema = z.object({
  username: zString(1, 20, "username"),
  password: zString( 1, 100, "password"),
});