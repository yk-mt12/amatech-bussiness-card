import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Footer } from "./components/Footer";
import { Interest } from "./components/Interest";
import { About } from "./components/About";
import { Info } from "./components/Info";
import "./App.css";
import { AmatechInfo } from "./components/AmatechInfo";
import { Events } from "./components/Events";
import { Hobby } from "./components/Hobby";

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
                  name="kitsune"
                  label="あまてく 代表"
                  knowMoreLink="https://kitsune-blog.tokyo/about"
                  mail="kitsune1247@gmail.com"
                  twitterLink="https://twitter.com/kitsune_yk"
                />
                <About
                  aboutText="京都産業大学4年生. Webフロントエンドエンジニア. UI/UXデザインに興味があります. 本日はよろしくお願いします！
            "
                />
                <Hobby hobbyText="スプラ. アニメ. カメラ. フットサル. ドリップコーヒー. 楽しいことや面白いことを見つけることが好きです！" />
                <Interest interestText="Webフロントエンド. UI/UX. SNSマーケティング. Next.js. React. React Native. TypeScript. Tailwind CSS. Firebase. " />
                <Footer
                  twitterLink="https://twitter.com/kitsune_yk"
                  githubLink="https://github.com/yk-mt12"
                  instagramLink="https://www.instagram.com/kitsune_yk"
                  linkedinLink="https://www.linkedin.com/in/kitune1247/"
                />
              </section>
            </div>

            {/* あまてくの名刺 */}
            <div className="back" onClick={() => handleClick()}>
              <section className="main__section">
                <AmatechInfo
                  name="あまてく"
                  label="エンジニアコミュニティ"
                  knowMoreLink="https://amatech1006.notion.site/amatech1006/9728f0790eb44f4794b8fe531fbde9c7"
                  mail="amatech1006@gmail.com"
                  twitterLink="https://twitter.com/amatech1006"
                />
                <About
                  aboutText={`2022年10月に設立. 現在100名弱が在籍.
                京都産業大学の学生を中心としたエンジニアコミュニティです. 勉強会やイベント企画, ゲスト登壇, ハッカソンなどエンジニアを目指す学生のための活動を行っています.`}
                />
                <Events />
                <Footer
                  twitterLink="https://twitter.com/amatech1006"
                  githubLink="https://github.com/amatech-repo"
                />
              </section>
            </div>
          </ReactCardFlip>
        </main>
    </>
  );
};

export default App;
