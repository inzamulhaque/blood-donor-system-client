const simplifyZodErrors = (
  errors: Record<string, any>
): Record<string, string> => {
  const simplifiedErrors: Record<string, string> = {};

  for (const key in errors) {
    if (errors[key]?.message) {
      simplifiedErrors[key] = (errors[key]?.message as string).replace(
        /^(Invalid (option|input):\s*)/,
        ""
      );
    }
  }

  return simplifiedErrors;
};

export default simplifyZodErrors;
