import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
// using the global css 
import Link from "next/link"
import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Holly Next Demo</title>
      </Head>
      <h1 >Hey World</h1>
      <Link className='link' href='/about'>About</Link>
    </div>
  )
}
