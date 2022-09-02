import joi from "joi";
import  { joiPasswordExtendCore } from 'joi-password';
const joiPassword = joi.extend( joiPasswordExtendCore );


let users = ['Manager', 'Client', 'Seller'];
const createClientSchema = joi.object({
    name: joi.string().required(),
    lastName: joi.string().required(),
    address: joi.array().items(
    joi.object({
        street: joi.string().required(),
        location: joi.string().required(),
        externalAddresNumber: joi.string().required(),
        internalAddresNumber: joi.string().required(),
        addressReference: joi.string().required(),
        city: joi.string().required(),
        country: joi.string().required(),
        zipCode: joi.number().required(),
        references: joi.string().required(),
    })),
    email: joi.string().required(),
    phone: joi.string().required(),
    contactReferences: joi.string(),
    role: joi.string().valid(...users).default('Manager').required(),
    password: joiPassword
        .string()
        .min(8)
        .max(30)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(2)
        .noWhiteSpaces()
        .messages({
            'password.min': '{#label} should contain at leat {#min} characters',
            'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
            'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
            'password.minOfSpecialCharacters': '{#label} should contain at least {#min} special character',
            'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
            'password.noWhiteSpaces': '{#label} should not contain white spaces',
      })
        .required()
})


export default async (req, res, next) => {
  try {
    await createClientSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'validation error',
      error
    })
  }
}

