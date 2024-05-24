// const { validationResult } = require('express-validator');
const validate = validations => {
  return async (req, res, next) => {
    const errMsg = []
    // sequential processing, stops running validations chain if one fails.
    for (const validation of validations) {
      const result = await validation.run(req);
      // console.log(result.errors)
      result.errors.forEach(value => errMsg.push(value.msg))
    }
    console.log(errMsg)
    if (errMsg.length !== 0) return res.status(400).json({ errors: errMsg });

    next();
  };
};

module.exports = validate;