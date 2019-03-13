export const fonts = () => {
  return `
    @font-face {
        font-family: "Circular";
        font-weight: 400;
        font-style: normal;
        src:url("fonts/circular/circular-book.woff") format("woff"),
        url("fonts/circular/circular-book.ttf") format("truetype");
    }
    @font-face {
        font-family: "Circular";
        font-weight: 400;
        font-style: italic;
        src:url("fonts/circular/circular-bookitalic.woff") format("woff"),
        url("fonts/circular/circular-bookitalic.ttf") format("truetype");
    }
    @font-face {
        font-family: "Circular";
        font-weight: 500;
        font-style: normal;
        src:url("fonts/circular/circular-medium.woff") format("woff"),
        url("fonts/circular/circular-medium.ttf") format("truetype");
    }
    @font-face {
        font-family: "Circular";
        font-weight: 500;
        font-style: italic;
        src:url("fonts/circular/circular-mediumitalic.woff") format("woff"),
        url("fonts/circular/circular-mediumitalic.ttf") format("truetype");
    }
    @font-face {
        font-family: "Circular";
        font-weight: 700;
        font-style: normal;
        src:url("fonts/circular/circular-bold.woff") format("woff"),
        url("fonts/circular/circular-bold.ttf") format("truetype");
    }
    @font-face {
        font-family: "Circular";
        font-weight: 700;
        font-style: italic;
        src:url("fonts/circular/circular-bolditalic.woff") format("woff"),
        url("fonts/circular/circular-bolditalic.ttf") format("truetype");
    }
    @font-face {
        font-family: "Circular";
        font-weight: 800;
        font-style: normal;
        src:url("fonts/circular/circular-black.woff") format("woff"),
        url("fonts/circular/circular-black.ttf") format("truetype");
    }
    @font-face {
        font-family: "Circular";
        font-weight: 800;
        font-style: italic;
        src:url("fonts/circular/circular-blackitalic.woff") format("woff"),
        url("fonts/circular/circular-blackitalic.ttf") format("truetype");
    }
    @font-face {
        font-family: "DIN";
        font-weight: bold;
        font-style: normal;
        src:url("fonts/din/din_next_medium.woff") format("woff"),
        url("fonts/din/din_next_medium.woff2") format("woff2"),
        url("fonts/din/din_next_medium.svg") format("svg"),
        url("fonts/din/din_next_medium.eot") format("eot"),
        url("fonts/din/din_next_medium.ttf") format("truetype");
    }
`;
};

export default fonts;
