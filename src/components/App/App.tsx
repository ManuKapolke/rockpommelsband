import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { Home } from "../../pages/Home/Home";
import { About } from "../../pages/About/About";
import { Contact } from "../../pages/Contact/Contact";
import { PrivacyERecht } from "../../pages/Legal/Privacy";
import { Imprint } from "../../pages/Legal/Imprint";
import { Concerts } from "../../pages/Concerts/Concerts";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="termine" element={<Concerts />} />
          <Route path="band" element={<About />} />
          {/* <Route path="press" element={<Press />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="video" element={<Video />} /> */}
          <Route path="kontakt" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="impressum" element={<Imprint />} />
          <Route path="datenschutz" element={<PrivacyERecht />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
