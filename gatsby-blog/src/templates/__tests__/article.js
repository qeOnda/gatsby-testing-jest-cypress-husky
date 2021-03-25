import React from "react"
import { render } from "@testing-library/react"
 
// You have to write data-testid
const ArticleTitle = () => <h1 data-testid="title">Cool blog title</h1>
 
test("Displays article title", () => {
  const { getByTestId } = render(<ArticleTitle />)  
  expect(getByTestId("title")).toHaveTextContent("Cool blog title")
})
