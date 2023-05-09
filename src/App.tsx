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
            twitterLink="https://twitter.com/kitsune_yk"
          />
          <About
            aboutText="京都産業大学4年生. Webフロントエンドエンジニア. UI/UXデザインに興味があります. 本日はよろしくお願いします！
            "
          />
          <Interest interestText="
          Webフロントエンド. UI/UX. SNSマーケティング.
          Next.js. React. React Native. TypeScript. Tailwind CSS. Firebase.
          スプラ. アニメ. 映画. カメラ. フットサル. ドリップコーヒー.
          " />
          <Footer
            twitterLink="https://twitter.com/kitsune_yk"
            githubLink="https://github.com/yk-mt12"
            instagramLink="#"
            linkedinLink="https://www.linkedin.com/in/kitune1247/"
          />
        </section>
      </main>
    </>
  );
};

export default App;
