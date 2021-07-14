import React from 'react'
import '@testing-library/jest-dom'
import {render, cleanup, screen} from '@testing-library/react'

import App from '@/App'

afterEach(cleanup)

const sleep = (time: number) => {
    return new Promise<void>(resolve => {
        const timer = setTimeout(() => {
            clearTimeout(timer)
            resolve()
        }, time)
    })
}

const rtlRender = (ui: any, {route}: any) => {
    window.history.pushState({}, 'Test page', route)
    render(ui)
}

test("测试 欢迎页 渲染", async () => {
    rtlRender(<App/>, {route: '/'})
    await sleep(500)
    const dom = screen.getByText("React is yyds")
    expect(dom).toBeInTheDocument()
})

test("测试 首页 渲染", async () => {
    rtlRender(<App/>, {route: '/home'})
    await sleep(500)
    const dom = screen.getByText("home")
    expect(dom).toBeInTheDocument()
})