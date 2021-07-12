import React from 'react'
import "@testing-library/jest-dom"
import {render, cleanup, screen} from '@testing-library/react'
import App from '@/App'

afterEach(cleanup)


const rtlRender = (ui: any, {route}: any) => {
    window.history.pushState({}, 'Test page', route)
    render(ui)
}

test("测试 欢迎页 渲染", () => {
    rtlRender(<App/>, {route: '/'})
    expect(screen.getByText("React is yyds")).toBeInTheDocument()
})

test("测试 首页 渲染", () => {
    rtlRender(<App/>, {route: '/home'})
    expect(screen.getByText("home")).toBeInTheDocument()
})