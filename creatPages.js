const pagesCreator = () => {
  const { error } = require("console");
  const fs = require("fs");
  const path = require("path");

  const htmlBoilerPlate = (title, fileName, header) => {
    let htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href=${fileName}>
    </head>
    <body>
        <h1>${header}</h1>
    </body>
    </html>`;
    return htmlTemplate;
  };

  const backgroundColor = () => {
    let generateBackgroundColor = "#";
    const hexChar = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      const randomChar = Math.floor(Math.random() * hexChar.length);
      generateBackgroundColor += hexChar[randomChar];
    }
    return generateBackgroundColor;
  };

  const cssStyle = () => {
    let style = `
    body{
        background-color: ${backgroundColor()};
    }
    `;
    return style;
  };

  const createFile = (fileLocation) => {
    fs.writeFile(path.join(__dirname, `/${fileLocation}`), (err) => {
      if (err) throw err;
    });
  };

  const writeToFile = (locationOfFile, content) => {
    fs.writeFile(
      path.join(__dirname, `${locationOfFile}`),
      `${content}`,
      (err) => {
        if (err) throw err;
      }
    );
  };

  const createFolder = (folderlocation) => {
    fs.mkdir(path.join(__dirname, `/${folderlocation}`), (err) => {
      if (err) throw err;
    });
  };
  // main folder
  createFolder("client");
  writeToFile(
    "/client/index.html",
    htmlBoilerPlate("home", '"./style.css"', "WELCOME TO HOME PAGE")
  );
  writeToFile("/client/style.css", cssStyle());

  // about folder files
  createFolder("client/about");
  writeToFile(
    "/client/about/index.html",
    htmlBoilerPlate("about", '"./style.css"', "WELCOME TO ABOUT PAGE")
  );
  writeToFile("/client/about/style.css", cssStyle());

  // blog folder files
  createFolder("client/blog");
  writeToFile(
    "/client/blog/index.html",
    htmlBoilerPlate("blog", '"./style.css"', "WELCOME TO BLOG PAGE")
  );
  writeToFile("/client/blog/style.css", cssStyle());

  // contact folder files
  createFolder("client/contact");
  writeToFile(
    "/client/contact/index.html",
    htmlBoilerPlate("contact", '"./style.css"', "WELCOME TO CONTACT PAGE")
  );
  writeToFile("/client/contact/style.css", cssStyle());
};


export default pagesCreator