import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import Home from '@/pages/home/home'


describe('a simple test', () => {
    it('should render the correct home', () => {
        const wrapper = render(<Home/>)
        const {getByText} = wrapper
        const count = getByText(0);
        const incrementButton = getByText("加1");

        //Act
        fireEvent.click(incrementButton);

        //Assert
        expect(count.textContent).toEqual("1")
    })
})