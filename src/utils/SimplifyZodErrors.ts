const simplifyZodErrors = (
  errors: Record<string, unknown>,
): Record<string, string> => {
  const simplifiedErrors: Record<string, string> = {};

  for (const key in errors) {
    const errorValue = errors[key];
    if (
      typeof errorValue === "object" &&
      errorValue !== null &&
      "message" in errorValue &&
      typeof (errorValue as { message: unknown }).message === "string"
    ) {
      let message = (errorValue as { message: string }).message;

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
