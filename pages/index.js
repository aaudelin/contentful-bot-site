import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getActions} from '../lib/api'
import Head from 'next/head'
import Navbar from "../components/navbar";
import HowItWorks from "../components/howItWorks";
import SectionSeparator from "../components/section-separator";
import Subscribe from "../components/subscribe";
import RedContainer from "../components/redContainer";
import Anchor from "../components/anchor";
import ExampleActions from "../components/exampleActions";

export default function Index({ preview, allActions }) {
  return (
    <>
      <Layout preview={preview} class="font-sans">
        <Head>
          <title>Contentful Bot - Automate with Zapier or Make</title>
        </Head>
        <Navbar />
        <Anchor name="home" />
        <Container>
          <Intro />
        </Container>
        <SectionSeparator />
        <Anchor name="how-it-works" />
        <Container>
          <HowItWorks />
        </Container>
        <Anchor name="subscribe" />
        <RedContainer>
          <Subscribe />
        </RedContainer>
        <Anchor name="examples" />
        <Container>
          <ExampleActions allActions={allActions} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allActions = (await getActions()) ?? []
  return {
    props: { preview, allActions },
  }
}
