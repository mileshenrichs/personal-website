import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout includeFooter={false}>
    <SEO title="Home" description="Hi, I'm Miles Henrichs!  This is my personal website." />
    <p className="homepage-blurb">
      Hi, I'm Miles.  I'm a college senior and I'll be joining Google in New York City as a software engineer in June.
      Someday I'll expand this into a full personal website where I showcase my coding projects and maybe write about 
      software/music production/neuroscience/whatever else I find interesting.  For now I'm just using this site as a motivation to get back
      into reading consistently, and I'll be writing a summary of each book I read <Link to="/book-summaries/">here</Link>.
    </p>
  </Layout>
);

export default IndexPage;
