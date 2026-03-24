/**
 * Validates a phone number.
 * Allows optional leading +, and expects between 8 and 18 digits.
 * Can contain spaces, dashes, or parentheses.
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  // Strip spaces, dashes, parentheses to count actual digits
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  
  // Basic Regex for international and local numbers
  const phoneRegex = /^\+?[0-9]{8,18}$/;
  
  return phoneRegex.test(cleaned);
};
