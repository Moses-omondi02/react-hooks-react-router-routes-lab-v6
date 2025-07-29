import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Movie from "../pages/Movie";

test("renders movie genres", async () => {
  const routes = [
    {
      path: "/movie/:id",
      element: <Movie />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/movie/1"],
  });

  render(<RouterProvider router={router} />);
  const genres = ["Action", "Adventure", "Fantasy"];
  for (const genre of genres) {
    const genreElement = await screen.findByText(genre);
    expect(genreElement).toBeInTheDocument();
    expect(genreElement.tagName).toBe("SPAN");
  }
});