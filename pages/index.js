import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
import PostCard from '~/components/Cards/PostCard';
import { gql } from '@apollo/client';
// Use this below for Server Side Render/Translation (SSR)
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/BannerSlider';
import CallAction from '~/components/CallAction';
import Feature from '~/components/Feature';
import Counter from '~/components/Counter';
import Testimonials from '~/components/Testimonials';
import FeaturedGames from '~/components/Game/FeaturedGames';
import Pricing from '~/components/Pricing';
import Blog from '~/components/Company/Blog';
import Subscribe from '~/components/Subscribe';
import Footer from '~/components/Footer';
import Corner from '~/components/Utils/Corner';
import Notification from '~/components/Utils/Notification';
import brand from '~/public/text/brand';
import { apolloClient } from '~/lib/apolloClient';

function Landing(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir, games } = props;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.starter.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <h1>{games[1].name}</h1>
          <p>{games[1].description[0].children[0].text}</p>
          <section className={cx(classes.spaceTop, classes.spaceBottomShort)} id="feature">
            <Container maxWidth="md">
              <PostCard
                href="#"
                img="https://picsum.photos/400"
                title="Maecenas rutrum dolor sed nisi"
                desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                date="12 Nov 2020"
                orientation="landscape"
                type="full"
              />
            </Container>
          </section>
          <section id="featured">
            <FeaturedGames />
          </section>
          <section id="call-actions" className={classes.spaceBottomShort}>
            <CallAction />
          </section>
          <section id="subscribe">
            <Subscribe />
          </section>
        </main>
        <Hidden mdDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
export async function getStaticProps({ locale }) {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        games {
          name
          description
        }
      }
    `,
  });
  
  return {
    props: {
      games: data.games,
      ...await serverSideTranslations(locale, ['common'])
    },
    revalidate: 60, // optional ISR
  };
}

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
