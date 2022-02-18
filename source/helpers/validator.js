/* eslint-disable no-unused-vars */
import Validate, { SchemaDefinition } from 'validate';

/**
 * validate object schema
 * @param {Object} data - object to validate
 * @param {SchemaDefinition} schemaDefinition - schema definition
 */
const validator = (data = {}, schemaDefinition = {}) => {
  const schema = new Validate(schemaDefinition);
  const errors = schema.validate(data);
  if (errors.length) return errors.map((error) => error.message);
  return null;
};

export default validator;
