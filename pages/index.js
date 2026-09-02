import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { gql } from '@apollo/client';
// Use this below for Server Side Render/Translation (SSR)
// Use this below for Static Site Generation (SSG)
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Quote from '~/components/Quote';
import PostCard from '~/components/Cards/PostCard';
import Header from '~/components/Header';
import BannerSlider from '~/components/BannerSlider';
import CallAction from '~/components/CallAction';
import Feature from '~/components/Feature';
import Counter from '~/components/Counter';
import FeaturedGames from '~/components/Game/FeaturedGames';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import games from '~/public/api/games';

function Landing(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
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
          {isMobile && (
            <div className={classes.spaceBottomShort}>
              <Quote />
            </div>
          )}
          <section id="home">
            <BannerSlider />
          </section>
          {/* Merch Sections */}
          <section className={cx(classes.spaceTopShort, classes.spaceBottomShort)} id="feature">
            <Container maxWidth="md">
              {games.map((item, index) => (
                <PostCard
                  key={index.toString()}
                  href={item.steamLink}
                  img={item.image}
                  title={item.name}
                  desc={item.description}
                  date={item.releaseDate}
                  orientation={isMobile ? 'portrait' : 'landscape'}
                  type="full"
                />
              ))}
            </Container>
          </section>
          {/* <section id="featured">
            <FeaturedGames />
          </section> */}
          <section id="call-actions" className={classes.spaceBottomShort}>
            <CallAction />
          </section>
        </main>
        {/* <Hidden mdDown>
          <Corner />
        </Hidden> */}
        <Footer toggleDir={onToggleDir} />
        {/* <Hidden lgDown>
          <Notification />
        </Hidden> */}
      </div>
    </React.Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export async function getStaticProps({ locale }) {
//   const { data } = await apolloClient.query({
//     query: gql`
//       query {
//         games {
//           name
//           description
//         }
//       }
//     `,
//   });
  
//   return {
//     props: {
//       games: data.games,
//       ...await serverSideTranslations(locale, ['common'])
//     },
//     revalidate: 60, // optional ISR
//   };
// }

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
