export default function manifest() {
  return {
    name: "Oluwafemi Medale",
    short_name: "Femi",
    description:
      "A calm personal website where Oluwafemi Medale shares writing, favorite quotes, and reflective notes on software, discipline, and life.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1116",
    theme_color: "#151b22",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
