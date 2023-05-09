type Props = {
  isFlip: boolean;
  interestText: string;
};

export const Interest = ({ isFlip, interestText }: Props) => {
  return (
    <>
      <section className="section_interest">
        <h2 className="interest">Interests</h2>
        <p className="interest__text">{interestText}</p>
      </section>
    </>
  );
};
