import { ZodError, ZodIssue } from "zod";
import { TGenericErrorResponse } from "../interface/error";

const HandleZodError = (err: ZodError): TGenericErrorResponse => {
  const statusCode = 400;
  const errorSources = err.issues.map((issue: ZodIssue) => {
    const path = issue?.path[issue.path.length - 1];

    return {
      path: typeof path === "string" || typeof path === "number" ? path : String(path),
      message: issue?.message,
    };
  });

  return {
    statusCode,
    message: "Validation Error!",
    errorSources,
  };
};

export default HandleZodError;
