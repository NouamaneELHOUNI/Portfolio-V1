const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur ut fugit, illum dolores eaque beatae accusamus dignissimos animi maxime, repellat praesentium exercitationem nemo explicabo sed soluta illo, voluptatem perferendis?
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
