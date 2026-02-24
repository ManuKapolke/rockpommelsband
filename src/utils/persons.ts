import KevinImg from "../assets/img/gallery/2025-10-03_Hagen/Manfred_Sommer/5V3A9432_1920.jpg";
import ManuImg from "../assets/img/gallery/2025-10-03_Hagen/Thomas_Borchard/2025_10_002_2049_3 1 7 81 91_1920.jpg";
import DemianImg from "../assets/img/gallery/2025-10-04_Hagen/Thomas_Borchard/2025_10_003_0006_3 1 7 81 91_1920.jpg";
import ArminImg from "../assets/img/gallery/2025-10-03_Hagen/Thomas_Borchard/2025_10_002_2069_3 1 7 81 91_1920.jpg";
import ToniImg from "../assets/img/gallery/2025-10-03_Hagen/Thomas_Borchard/2025_10_002_2057_3 1 7 81 91_1920.jpg";
import MillaImg from "../assets/img/gallery/2025-10-03_Hagen/Thomas_Borchard/2025_10_002_2068_3 1 7 81 91_1920.jpg";
import RolfImg from "../assets/img/band/x_00828674_cut.jpg";
import TattvaImg from "../assets/img/band/2025_10_003_2307_3 1 7 81 91_cut_1920.jpg";

export type Person = {
  name: string;
  instrument: string;
  instrumentEmoji: string;
  bwSrc: string;
  colorSrc: string;
  position: { top: string; left: string };
  width: string;
  height: string;
  photo: string;
};

export const persons: Array<Person> = [
  {
    name: "Kevin Hollmann",
    instrument: "Gitarre",
    instrumentEmoji: "🎸",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_kevin_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_kevin.png",
    position: { top: "0px", left: "0px" },
    width: "100px",
    height: "800px",
    photo: KevinImg,
  },
  {
    name: "Manu Kapolke",
    instrument: "Gitarre, Keyboards, Gesang",
    instrumentEmoji: "🎸",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_manu_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_manu.png",
    position: { top: "200px", left: "250px" },
    width: "100px",
    height: "800px",
    photo: ManuImg,
  },
  {
    name: "Demian Hache",
    instrument: "Schlagzeug, Percussion, Keyboards",
    instrumentEmoji: "🥁",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_demi_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_demi.png",
    position: { top: "300px", left: "350px" },
    width: "100px",
    height: "800px",
    photo: DemianImg,
  },
  {
    name: "Armin Krull",
    instrument: "Gesang, Akustikgitarre",
    instrumentEmoji: "🎤",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_armin_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_armin.png",
    position: { top: "400px", left: "450px" },
    width: "100px",
    height: "800px",
    photo: ArminImg,
  },
  {
    name: "Toni Moff Mollo",
    instrument: "Gesang",
    instrumentEmoji: "🎤",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_toni_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_toni.png",
    position: { top: "500px", left: "550px" },
    width: "100px",
    height: "800px",
    photo: ToniImg,
  },
  {
    name: "Milla Kapolke",
    instrument: "Bass, Moog Taurus, Gesang",
    instrumentEmoji: "🎸",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_milla_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_milla.png",
    position: { top: "600px", left: "650px" },
    width: "100px",
    height: "800px",
    photo: MillaImg,
  },
  {
    name: "Rolf ATS Möller",
    instrument: "Schlagzeug, Percussion",
    instrumentEmoji: "🥁",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_rolf_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_rolf.png",
    position: { top: "700px", left: "750px" },
    width: "100px",
    height: "800px",
    photo: RolfImg,
  },
  {
    name: "Deva Tattva",
    instrument: "Keyboards",
    instrumentEmoji: "🎹",
    bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_tattva_bw.png",
    colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_tattva.png",
    position: { top: "800px", left: "850px" },
    width: "100px",
    height: "800px",
    photo: TattvaImg,
  },
];
