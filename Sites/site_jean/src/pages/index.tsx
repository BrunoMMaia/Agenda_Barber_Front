import React from 'react';
import Head from 'next/head';
import Home from '../pages/home/index';
import About from '../pages/about/index';
import Slider from '../pages/slider/index';

import Footer from '../pages/footer/index';

import Comments from '../pages/comments/index';
 

const Index: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Teste</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="home">
            <Home />
        </section>

        <section id="slider">
            <Slider />
        </section>

        <section id="sobre">
            <About />
        </section>

        <section id="Comments">
            <Comments />
        </section>
        
        <section id="footer">
            <Footer />
        </section>



        

      </main>
    </div>
  );
}

export default Index;