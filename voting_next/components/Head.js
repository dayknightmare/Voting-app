import React from 'react';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>My styled page</title>
      <link href="/static/css/main.css" rel="stylesheet" />
    </Head>
    <p className="some-class-name">
      Hello world!
    </p>
  </div>
)