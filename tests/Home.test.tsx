import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'
import Home from '../src/pages/home/Home'

afterEach(cleanup)

test('测试点击事件', () => {
    const { getByText } = render(<Home />)

    //Action
    fireEvent.click(getByText('加1'))

    //Assert
    expect(getByText('1').textContent).toEqual('1')
})
