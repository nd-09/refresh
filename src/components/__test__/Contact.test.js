import { render, screen } from "@testing-library/react"
import ConatactUs from "../../pages/ContactUs"
import "@testing-library/jest-dom"

describe('test block for contact us page', () => { 
    
    test("Should render Contact us component",()=>{
    render(<ConatactUs/>)
    const heading = screen.getAllByRole("heading");
    
    //Assertion
    expect(heading.length).toBe(3);
    });
 })