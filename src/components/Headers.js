/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'
import ogImage from '../img/og-image.png'

const Headers = ({ setTitle, setDescription }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="en" />
      <title>{setTitle || title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png" />
      <link rel="icon" href="../img/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png" />
      <link rel="manifest" href="../img/site.webmanifest" />
      <link rel="mask-icon" href="../img/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={setDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={setTitle || title} />
      <meta property="og:description" content={setDescription || description} />
      <meta property="og:url" content="/" />
      <meta property="og:image" itemProp="image" content={ogImage} />
      <script id="hotmart_launcher_script">
        {`(function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
        (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
        e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
      })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');
        hot('account','aba6f9d9-41ef-32e2-b2fa-b791a5684f0b');`}
      </script>
      {/* RD Station Script */}
      <script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/34e561cb-dca0-4c4b-9c4a-aac02de93cc0-loader.js"
      />
    </Helmet>
  )
}

export default Headers
