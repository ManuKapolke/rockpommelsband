
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { Home } from "../../pages/Home/Home";
import { Anzeige } from "../../pages/Home/Anzeige";
import { About } from "../../pages/About/About";
import { Contact } from "../../pages/Contact/Contact";
import { PrivacyERecht } from "../Legal/Privacy";
import { Imprint } from "../Legal/Imprint";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="konzerte" element={<Concerts />} /> */}
          <Route path="about" element={<About />} />
          {/* <Route path="press" element={<Press />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="video" element={<Video />} /> */}
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="imprint" element={<Imprint />} />
          <Route path="privacy" element={<PrivacyERecht />} />
          <Route path="anzeige" element={<Anzeige />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
