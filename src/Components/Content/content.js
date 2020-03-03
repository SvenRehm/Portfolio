import picture from "../../images/thumbnail/project1.jpg"

export const firstSection = {
   demolink: "https://myanimelist.herokuapp.com",
   codelink: "https://github.com/SvenRehm/Anime-Api-Practice-Project",
   headline: "MyAnimeList",
   description:
      "Animelibrary in der man eine liste der Animes die man ansehen will erstellen kann",
   paragraph1: "Something Really good written",
   bullets: [
      "Focus und Ziel der Web App war es Redux zu lernen und das verständniss von React zu vertiefen",
      "Entwurf des UX/UI Designs in AdobeXD und Implementierung mit React/ReactRouter/Redux",
      "Kitsu Api Datenbank benutzt und diese mit Postman getestet",
      "Entwicklung des Backends für Account erstellung mit Passwort-Hashen , Gestaltete Datenbank mit mehreren Datentabellen um weitere information gespeichert werden",
      "Implementierte JSON web token für Authentifikation das im Lokalen Speicher gespeichert wird",
      "Hosting des Frontends und Backends auf Heroku durchgeführt"
   ],

   skills: ["HTML/CSS", "REACT", "REDUX", "NODE", "POSTGRESSQL", "POSTMAN"],
   // picture: "./images/SharedScreenshot.jpg"
   picture: picture
}

export const secondSection = {
   headline: "MyAnimeList",
   paragraph1: "Something Really good written",
   skills: ["HTML/CSS", "REACT", "REDUX", "POSTGRESSQL"]
}

export default {
   firstSection,
   secondSection
}
