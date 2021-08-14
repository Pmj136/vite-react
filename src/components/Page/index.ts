import InnerPage from './InnerPage'
import Section from './Section'

type CtType = typeof InnerPage

interface IPage extends CtType {
    Section: typeof Section
}

const Page = InnerPage as IPage
Page.Section = Section

export default Page
