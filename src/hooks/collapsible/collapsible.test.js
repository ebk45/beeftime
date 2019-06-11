import { renderHook, act } from "react-hooks-testing-library";
import useCollapsible from "./";

test("should set IsOpen to true", () => {
  const { result } = renderHook(() => useCollapsible());

  act(() => result.current.setIsOpen(true));

  expect(result.current.isOpen).toBe(true);
});
