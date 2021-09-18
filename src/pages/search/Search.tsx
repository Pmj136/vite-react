import React from 'react'
import { JPage, JPageSection } from '@/components/JPage'
import Result from '@/pages/search/Result'

function Search() {
    return (
        <JPage>
            <JPageSection xs={9}>
                <Result />
            </JPageSection>
        </JPage>
    )
}

export default Search
