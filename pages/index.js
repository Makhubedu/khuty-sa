import Head from 'next/head'
import Instagram from '../components/Instagram'
import Layout from '../components/Layout'
import Music from '../components/Music'
import Twitter from '../components/Twitter'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTubeList from '../components/YouTubeList'
import Contact from '../components/Contact'


export default function Home({ insta_token }) {

  return (
    <Layout>
      <Music />
      <Twitter />
      <Instagram token={insta_token} />
      <YouTubeList />
      <Contact />
    </Layout>
  )
}

export async function getStaticProps(){
  return{
    props : {
      insta_token: process.env.INSTAGRAM_KEY
    }
  }
}
