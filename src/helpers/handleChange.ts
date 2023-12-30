type handleChangeParams = {
  field: string;
  event: React.FormEvent<HTMLFormElement>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate: (value: string) => string | null;
  removeError: (fieldName: string) => void;
  setError: ({ field, message }: any) => void;
};

export const handleChange = ({
  field,
  setValue,
  validate,
  event,
  removeError,
  setError,
}: handleChangeParams) => {
  const value = event.currentTarget.value;
  setValue(value);

  const error = validate(value);

  error ? setError({ field, message: error }) : removeError(field);
};
