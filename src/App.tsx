import { Footer } from "./components/Footer";
import { Interest } from "./components/Interest";
import { About } from "./components/About";
import { Info } from "./components/Info";
import "./App.css";

const App = () => {
  return (
    <>
      <main className="main">
        <section className="main__section">
          <Info
            name="Yuki Matsuishi"
            label="あまてく 代表"
            knowMoreLink="https://kitsune-blog.tokyo/about"
            mail="kitsune1247@gmail.com"
            linkedin="https://www.linkedin.com/in/kitune1247/"
          />
          <About
            aboutText="こんにちは！あまてくです！
            あまてくは、Webサイト制作を中心に活動しているフリーランスです。
            あまてくは、Webサイト制作を中心に活動しているフリーランスです。
            "
          />
          <Interest interestText="
          Webフロントエンド. UI/UX. SNSマーケティング.
          Next.js. React. React Native. TypeScript. Tailwind CSS. Firebase.
          スプラ. アニメ. 映画. カメラ. フットサル. ドリップコーヒー.
          " />
          <Footer
            twitterLink="https://twitter.com/kitune_yk"
            githubLink="https://github.com/yk-mt12"
          />
        </section>
      </main>
    </>
  );
};

export default App;
