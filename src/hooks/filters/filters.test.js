import { renderHook, act } from "react-hooks-testing-library";
import useFilterSorters from "./";

let array = [
  { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
  { title: "fake film 3", watched: false, popularity: 2, rating: 0 },
  { title: "fake movie 2", watched: true, popularity: 5, rating: 5 },
  { title: "fake film 4", watched: true, popularity: 1, rating: 4 }
];

test("by default, returns array unaltered", () => {
  const { result } = renderHook(() => useFilterSorters());
  expect(result.current.returnAlteredList(array)).toEqual(array);
});

test("returns watched array", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setFilter({ id: "watched" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
    { title: "fake movie 2", watched: true, popularity: 5, rating: 5 },
    { title: "fake film 4", watched: true, popularity: 1, rating: 4 }
  ]);
});

test("returns notwatched array", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setFilter({ id: "notWatched" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake film 3", watched: false, popularity: 2, rating: 0 }
  ]);
});

test("returns alphabetically sorted array, A-Z", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setSort({ id: "alphaAscending" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake film 3", watched: false, popularity: 2, rating: 0 },
    { title: "fake film 4", watched: true, popularity: 1, rating: 4 },
    { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
    { title: "fake movie 2", watched: true, popularity: 5, rating: 5 }
  ]);
});

test("returns alphabetically sorted array, Z-A", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setSort({ id: "alphaDescending" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake movie 2", watched: true, popularity: 5, rating: 5 },
    { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
    { title: "fake film 4", watched: true, popularity: 1, rating: 4 },
    { title: "fake film 3", watched: false, popularity: 2, rating: 0 }
  ]);
});

test("returns popularity sorted array, ascending", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setSort({ id: "popAscending" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake movie 2", watched: true, popularity: 5, rating: 5 },
    { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
    { title: "fake film 3", watched: false, popularity: 2, rating: 0 },
    { title: "fake film 4", watched: true, popularity: 1, rating: 4 }
  ]);
});

test("returns popularity sorted array, descending", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setSort({ id: "popDescending" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake film 4", watched: true, popularity: 1, rating: 4 },
    { title: "fake film 3", watched: false, popularity: 2, rating: 0 },
    { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
    { title: "fake movie 2", watched: true, popularity: 5, rating: 5 }
  ]);
});

test("returns rating sorted array, asscending", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setSort({ id: "rateAscending" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake movie 2", watched: true, popularity: 5, rating: 5 },
    { title: "fake film 4", watched: true, popularity: 1, rating: 4 },
    { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
    { title: "fake film 3", watched: false, popularity: 2, rating: 0 }
  ]);
});

test("returns rating sorted array, descending", () => {
  const { result } = renderHook(() => useFilterSorters());

  act(() => result.current.setSort({ id: "rateDescending" }));

  expect(result.current.returnAlteredList(array)).toEqual([
    { title: "fake film 3", watched: false, popularity: 2, rating: 0 },
    { title: "fake movie 1", watched: true, popularity: 3, rating: 2 },
    { title: "fake film 4", watched: true, popularity: 1, rating: 4 },
    { title: "fake movie 2", watched: true, popularity: 5, rating: 5 }
  ]);
});
