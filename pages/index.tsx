import type { NextPage } from 'next'
import Head from 'next/head'

import styled from 'styled-components'
import { Container, MainButton } from '../styles/custom-styles'

import { Footer } from '../components/components'

const Content = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    line-height: 1.2;
    margin-bottom: 12px;
    font-size: ${props => props.theme.fonts.big};
  }
`

const Home: NextPage = () => {
  return (
    <>
    <Container>
      <Head>
        <title>Next.ts + styled-component TEMPLATE</title>
      </Head>

      <Content>
        <h1>Hello word!</h1>
        <MainButton href="#">This is awesome!</MainButton>
      </Content>
    </Container>
    <Footer />
    </>
  )
}

export default Home
