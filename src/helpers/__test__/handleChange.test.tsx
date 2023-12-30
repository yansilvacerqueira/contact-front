import { handleChange } from '../handleChange';

const mockSetValue = jest.fn();
const mockValidate = jest.fn();
const mockRemoveError = jest.fn();
const mockSetError = jest.fn();

describe('handleChange function', () => {
  it('should update value, remove error, and not set error if validation passes', () => {
    const field = 'testField';
    const value = 'validValue';
    mockValidate.mockReturnValue(null);

    const mockEvent: any = {
      currentTarget: {
        value,
      },
    };

    handleChange({
      field,
      setValue: mockSetValue,
      validate: mockValidate,
      event: mockEvent,
      removeError: mockRemoveError,
      setError: mockSetError,
    });

    expect(mockSetValue).toHaveBeenCalledWith(value);
    expect(mockRemoveError).toHaveBeenCalledWith(field);
    expect(mockSetError).not.toHaveBeenCalled();
  });

  it('should update value, set error, and not remove error if validation fails', () => {
    const field = 'testField';
    const value = 'invalidValue';
    const errorMessage = 'Validation error';
    mockValidate.mockReturnValue(errorMessage);

    const mockEvent: any = {
      currentTarget: {
        value,
      },
    };

    handleChange({
      field,
      setValue: mockSetValue,
      validate: mockValidate,
      event: mockEvent,
      removeError: mockRemoveError,
      setError: mockSetError,
    });

    expect(mockSetValue).toHaveBeenCalledWith(value);
    expect(mockSetError).toHaveBeenCalledWith({ field, message: errorMessage });
    expect(mockRemoveError).not.toHaveBeenCalled();
  });
});
