import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Elhouni Nouamane is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Elhouni Nouamane, Elhouni, Nouamane, web developer portfolio, Nouamane web developer, Elhouni developer, mern stack, Elhouni Nouamane portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Elhouni Nouamane's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to see."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta
        property="og:url"
        content="https://github.com/NouamaneELHOUNI?tab=repositories"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Elhouni Nouamane",
};
