import { renderHook, act } from '@testing-library/react';
import { useErrors } from '../useErrors';

describe('useErrors hook', () => {
  it('should set a new error for a given field', () => {
    const { result } = renderHook(() => useErrors());

    const { setError } = result.current;

    const fieldName = 'testField';
    const errorMessage = 'This is an error message';

    act(() => {
      setError({ field: fieldName, message: errorMessage });
    });

    const error = result.current.getErrorMessageByFieldName(fieldName);

    expect(error).toEqual(errorMessage);
  });

  it('should remove an existing error for a given field', () => {
    const { result } = renderHook(() => useErrors());

    const { setError, removeError } = result.current;
    const fieldName = 'testField';
    const errorMessage = 'This is an error message';

    act(() => {
      setError({ field: fieldName, message: errorMessage });
      removeError(fieldName);
    });

    const error = result.current.getErrorMessageByFieldName(fieldName);

    expect(error).toBeUndefined();
  });
});
