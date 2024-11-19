import { render , screen} from "@testing-library/react"
import Restcard, { PromotedRestCard } from "../RestCard"
import cardMock from "../../__mocks__/cardMock.json"
import '@testing-library/jest-dom';


test("Should render restaurant card in the cards", ()=>{
    render(<Restcard myfetchedData={cardMock}></Restcard>)

    const card = screen.getByText("Subway")

    expect(card).toBeInTheDocument()
})


