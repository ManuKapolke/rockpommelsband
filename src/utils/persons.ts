export type Person = {
    name: string;
    instrument: string;
    instrumentEmoji: string;
    bwSrc: string;
    colorSrc: string;
    position: { top: string; left: string };
    width: string;
    height: string;
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
    },
    {
        name: "Manu Kapolke",
        instrument: "Gitarre",
        instrumentEmoji: "🎸",
        bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_manu_bw.png",
        colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_manu.png",
        position: { top: "200px", left: "250px" },
        width: "100px",
        height: "800px",
    },
    {
        name: "Demian Hache",
        instrument: "Schlagzeug",
        instrumentEmoji: "🥁",
        bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_demi_bw.png",
        colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_demi.png",
        position: { top: "300px", left: "350px" },
        width: "100px",
        height: "800px",
    },
    {
        name: "Armin Krull",
        instrument: "Gesang",
        instrumentEmoji: "🎤",
        bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_armin_bw.png",
        colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_armin.png",
        position: { top: "400px", left: "450px" },
        width: "100px",
        height: "800px",
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
    },
    {
        name: "Milla Kapolke",
        instrument: "Bass",
        instrumentEmoji: "🎸",
        bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_milla_bw.png",
        colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_milla.png",
        position: { top: "600px", left: "650px" },
        width: "100px",
        height: "800px",
    },
    {
        name: "Rolf ATS Möller",
        instrument: "Schlagzeug",
        instrumentEmoji: "🥁",
        bwSrc: "src/assets/img/band/IMG_8643-removebg_cut_rolf_bw.png",
        colorSrc: "src/assets/img/band/IMG_8643-removebg_cut_rolf.png",
        position: { top: "700px", left: "750px" },
        width: "100px",
        height: "800px",
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
    },
];