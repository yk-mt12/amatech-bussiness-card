type Props = {
  isFlip: boolean;
  aboutText: string;
};

export const About = ({ isFlip, aboutText }: Props) => {
  return (
    <>
      <section className="section_about">
        <h2 className="about">About</h2>
        <p className="about__text">{aboutText}</p>
      </section>
    </>
  );
};
