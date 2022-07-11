import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Header from '../../components/header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import {getActions} from '../../lib/api'

export default function Post({ action, preview }) {
  const router = useRouter()

  if (!router.isFallback && !action) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
          <h2>{action.name}</h2>
          <SectionSeparator />
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const data = await getActions()
  return {
    props: {
      preview,
      action: data?.find(action => action.slug) ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getActions()
  return {
    paths: allPosts?.map(({ slug }) => `/actions/${slug}`) ?? [],
    fallback: true,
  }
}
