import { useState } from 'react';

type errorMessage = {
  field: string;
  message: string;
};

type useErrorsProps = {
  removeError: (fieldName: string) => void;
  setError: ({ field, message }: errorMessage) => void;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
};

export const useErrors = (): useErrorsProps => {
  const [errors, setErrors] = useState<errorMessage[]>([]);

  const setError = ({ field, message }: errorMessage) => {
    const errorExists = errors.find((error) => error.field === field);

    if (errorExists) return;

    setErrors((prevState) => [...prevState, { field, message }]);
  };

  const removeError = (fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName),
    );
  };

  const getErrorMessageByFieldName = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
};
