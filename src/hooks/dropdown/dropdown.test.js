import { renderHook, act } from "react-hooks-testing-library";
import useDropdown from "./";

test("should set IsDropped to true", () => {
  const { result } = renderHook(() => useDropdown());

  act(() => result.current.setIsDropped(true));

  expect(result.current.isDropped).toBe(true);
});
