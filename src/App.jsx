import { useState } from "react";
import Bgchanger from "./componant/bgchanger";
import { Outlet } from "react-router-dom";
import Navbar from "./componant/navbar";
import { Helmet } from "react-helmet";
function App() {
  const [bgchange, setBgchnage] = useState("#94a3b8");
  // useAdSense();
  return (
    <>
      {" "}
      <Helmet>
        <title>Multi Tool Three - Online Tools Collection</title>
        <meta
          name="description"
          content="Multi Tool Three - Free online tools like password generator, counter, currency converter, and more.Simple, fast, and free to use!"
        />
        <meta
          name="keywords"
          content="multi tool three, online tools, password generator, counter, currency converter, todo list"
        />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Multi Tool Three - Online Tools Collection"
        />
        <meta
          property="og:description"
          content="Free online tools like password generator, counter, currency converter, and more."
        />
        <meta
          property="og:image"
          content="https://multi-tool-three.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://multi-tool-three.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Multi Tool Three - Online Tools Collection"
        />
        <meta
          name="twitter:description"
          content="Free online tools like password generator, counter, currency converter, and more."
        />
        <meta
          name="twitter:image"
          content="https://multi-tool-three.vercel.app/og-image.png"
        />
      </Helmet>
      <div
        className="bg-slate-400 min-h-screen w-full duration-500 flex flex-col items-center gap-10  "
        style={{ background: bgchange }}
      >
        <Navbar />
        <div className="w-full max-w-screen-xl ">
          <Outlet />
        </div>
        <Bgchanger Setbgchange={setBgchnage} />
      </div>
    </>
  );
}

export default App;
