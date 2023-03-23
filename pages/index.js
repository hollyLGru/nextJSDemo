// you can view this page by typing at end of URL "/"" bc of how we named our file

import Head from 'next/head'


export default function Home() {
  return (
    <div style={{textAlign: 'center'}} >
      <Head>
        <title>Holly Next Demo</title>
        {/* shows this in the tab using Head import */}
      </Head>
      <h1 >Hey World</h1>
    </div>
  )
}


