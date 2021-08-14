import React from 'react'
import Page from '@/components/Page'
import Result from '@/pages/search/Result'

function Search() {
    return (
        <Page>
            <Page.Section xs={9}>
                <Result />
            </Page.Section>
        </Page>
    )
}

export default Search
