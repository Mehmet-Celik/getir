const validateHandle = (body = {}, validatedFields = []) => {
    const invalidFields = [];
    validatedFields.forEach((field) => {
        if (!body[field]) {
            invalidFields.push(field);
        }
    });

    if (invalidFields.length) throw({ invalidFields });
};

module.exports = validateHandle;
