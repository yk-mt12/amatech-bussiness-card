import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Footer } from "./components/Footer";
import { Interest } from "./components/Interest";
import { About } from "./components/About";
import { Info } from "./components/Info";
import "./App.css";

const App = () => {
  const [isFlip, setIsFlip] = useState(false);

  const handleClick = () => {
    setIsFlip(!isFlip);
  };

  return (
    <>
      <main className="main">
        <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
          {/* 個人の名刺 */}
          <div className="front" onClick={() => handleClick()}>
            <section className="main__section">
              <Info
                name="Yuki Matsuishi"
                label="あまてく 代表"
                knowMoreLink="https://kitsune-blog.tokyo/about"
                mail="kitsune1247@gmail.com"
                twitterLink="https://twitter.com/kitsune_yk"
              />
              <About
                aboutText="京都産業大学4年生. Webフロントエンドエンジニア. UI/UXデザインに興味があります. 本日はよろしくお願いします！
            "
              />
              <Interest
                interestText="
          Webフロントエンド. UI/UX. SNSマーケティング.
          Next.js. React. React Native. TypeScript. Tailwind CSS. Firebase.
          スプラ. アニメ. 映画. カメラ. フットサル. ドリップコーヒー.
          "
              />
              <Footer
                twitterLink="https://twitter.com/kitsune_yk"
                githubLink="https://github.com/yk-mt12"
                instagramLink="#"
                linkedinLink="https://www.linkedin.com/in/kitune1247/"
              />
            </section>
          </div>

          {/* あまてくの名刺 */}
          <div className="back" onClick={() => handleClick()}>
            <section className="main__section">
              <Info
                name="Yuki Matsuishi"
                label="あまてく 代表"
                knowMoreLink="https://kitsune-blog.tokyo/about"
                mail="kitsune1247@gmail.com"
                twitterLink="https://twitter.com/kitsune_yk"
              />
              <About
                aboutText="京都産業大学4年生. Webフロントエンドエンジニア. UI/UXデザインに興味があります. 本日はよろしくお願いします！
            "
              />
              <Interest interestText="" />
              <Footer
                twitterLink="https://twitter.com/kitsune_yk"
                githubLink="https://github.com/yk-mt12"
                instagramLink="#"
                linkedinLink="https://www.linkedin.com/in/kitune1247/"
              />
            </section>
          </div>
        </ReactCardFlip>
      </main>
    </>
  );
};

export default App;
