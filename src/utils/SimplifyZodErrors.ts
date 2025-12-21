const simplifyZodErrors = (
  errors: Record<string, any>
): Record<string, string> => {
  const simplifiedErrors: Record<string, string> = {};

  for (const key in errors) {
    if (errors[key]?.message) {
      let message = errors[key].message as string;

      if (message.includes("expected string, received undefined")) {
        message = `${key} is required`;
      } else if (message.startsWith("Invalid option:")) {
        message = "Please select one!";
      } else {
        message = message.replace(/^(Invalid (option|input):\s*)/, "");
      }

      simplifiedErrors[key] = message;
    }
  }

  return simplifiedErrors;
};

export default simplifyZodErrors;
