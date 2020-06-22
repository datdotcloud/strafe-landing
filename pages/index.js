import Head from 'next/head'

export default function Home() {
  return (
    <div className="container bg-dark-100 light-100">
      <Head>
        <title>Strafe</title>
        <meta charSet='utf-8' />

        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content="https://strafe.live/" key="og:url" />
        <meta property="og:title" content="Strafe — live streaming platform" key="og:title" />
        <meta property="og:description" content="Strafe is a live streaming platform." key="og:description" />
        <meta property="og:image" content="https://strafe.live/strafe-logo.png" key="og:image" />
        <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta property="twitter:url" content="https://strafe.live" key="twitter:url" />
        <meta property="twitter:title" content="Strafe — live streaming platform" key="twitter:title" />
        <meta property="twitter:site" content="@StrafeLive" key="twitter:site" />
        <meta property="twitter:description" content="Strafe is a live streaming platform." key="twitter:description" />
        <meta property="twitter:image" content="https://strafe.live/strafe-logo.png" key="twitter:image" />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2|PT+Sans&display=swap" />
      </Head>

      <main>
        <div className="mt3 mt0-l mb3 tc">
          <img className="h3" src="/strafe-logo.png" />
        </div>
        <div className="pt3 pb2 w-100 f3 ttu tc bg-dark-200">Strafe is a live streaming platform.</div>
        <div className="pa2 w-100 flex flex-row-l flex-column bg-dark-200 ma2-l w-100">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-YEG9DgRHhA?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </main>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html, body {
          position: relative;
          height: 100%;
          overflow-y: hidden;
          font-family: 'PT Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5 {
          font-family: 'Exo 2', sans-serif;
        }
        /* scrollbars */
        * {
          scrollbar-color: #1b5a75 transparent;
          scrollbar-width: thin;
          scrollbar-
        }
        ::-webkit-scrollbar {
          width: .4em;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #1b5a75;
          outline: 0;
        }
        
        /* strafe fonts */
        .pt-sans { font-family: 'PT Sans', sans-serif }
        .exo-2 { font-family: 'Exo 2', sans-serif }
        
        /* strafe colors */
        /* dark shades */
        .dark-100 { color: #0f0f0f }
        .dark-200 { color: #141414 }
        .dark-300 { color: #1e1e1e }
        .bg-dark-100 { background-color: #0f0f0f }
        .bg-dark-200 { background-color: #141414 }
        .bg-dark-300 { background-color: #1e1e1e }
        .b--dark-100 { border-color: #0f0f0f }
        .b--dark-200 { border-color: #141414 }
        .b--dark-300 { border-color: #1e1e1e }
        .hover-dark-100:hover { color: #0f0f0f }
        .hover-dark-200:hover { color: #141414 }
        .hover-dark-300:hover { color: #1e1e1e }
        .hover-bg-dark-100:hover { background-color: #0f0f0f }
        .hover-bg-dark-200:hover { background-color: #141414 }
        .hover-bg-dark-300:hover { background-color: #1e1e1e }
        .hover-b--dark-100:hover { border-color: #0f0f0f }
        .hover-b--dark-200:hover { border-color: #141414 }
        .hover-b--dark-300:hover { border-color: #1e1e1e }
        /* light shades */
        .light-100 { color: #efefef }
        .light-200 { color: #dadada }
        .light-300 { color: #c4c4c4 }
        .bg-light-100 { background-color: #efefef }
        .bg-light-200 { background-color: #dadada }
        .bg-light-300 { background-color: #c4c4c4 }
        .b--light-100 { border-color: #efefef }
        .b--light-200 { border-color: #dadada }
        .b--light-300 { border-color: #c4c4c4 }
        .hover-light-100:hover { color: #efefef }
        .hover-light-200:hover { color: #dadada }
        .hover-light-300:hover { color: #c4c4c4 }
        .hover-bg-light-100:hover { background-color: #efefef }
        .hover-bg-light-200:hover { background-color: #dadada }
        .hover-bg-light-300:hover { background-color: #c4c4c4 }
        .hover-b--light-100:hover { border-color: #efefef }
        .hover-b--light-200:hover { border-color: #dadada }
        .hover-b--light-300:hover { border-color: #c4c4c4 }
        /* blue shades */
        .blue-100 { color: #4b93b1 }
        .blue-200 { color: #247ba0 }
        .blue-300 { color: #1b5a75 }
        .bg-blue-100 { background-color: #4b93b1 }
        .bg-blue-200 { background-color: #247ba0 }
        .bg-blue-300 { background-color: #1b5a75 }
        .b--blue-100 { border-color: #4b93b1 }
        .b--blue-200 { border-color: #247ba0 }
        .b--blue-300 { border-color: #1b5a75 }
        .hover-blue-100:hover { color: #4b93b1 }
        .hover-blue-200:hover { color: #247ba0 }
        .hover-blue-300:hover { color: #1b5a75 }
        .hover-bg-blue-100:hover { background-color: #4b93b1 }
        .hover-bg-blue-200:hover { background-color: #247ba0 }
        .hover-bg-blue-300:hover { background-color: #1b5a75 }
        .hover-b--blue-100:hover { border-color: #4b93b1 }
        .hover-b--blue-200:hover { border-color: #247ba0 }
        .hover-b--blue-300:hover { border-color: #1b5a75 }
        /* red shades */
        .red-100 { color: #f67884 }
        .red-200 { color: #f45b69 }
        .red-300 { color: #b2434d }
        .bg-red-100 { background-color: #f67884 }
        .bg-red-200 { background-color: #f45b69 }
        .bg-red-300 { background-color: #b2434d }
        .b--red-100 { border-color: #f67884 }
        .b--red-200 { border-color: #f45b69 }
        .b--red-300 { border-color: #b2434d }
        .hover-red-100:hover { color: #f67884 }
        .hover-red-200:hover { color: #f45b69 }
        .hover-red-300:hover { color: #b2434d }
        .hover-bg-red-100:hover { background-color: #f67884 }
        .hover-bg-red-200:hover { background-color: #f45b69 }
        .hover-bg-red-300:hover { background-color: #b2434d }
        .hover-b--red-100:hover { border-color: #f67884 }
        .hover-b--red-200:hover { border-color: #f45b69 }
        .hover-b--red-300:hover { border-color: #b2434d }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
