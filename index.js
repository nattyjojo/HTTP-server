const fs = require('fs')
const path = require('path')
const http = require('http')
const { error } = require('console')


// The event listener for homePage


const createServers = () => {
    // pages location
    const homePage = './client/index.html'
    const aboutPage = './client/about/index.html'
    const blogPage = './client/blog/index.html'
    const contactPage = './client/contact/index.html'

    const homePageUrl = '/'
    const aboutPageUrl = '/about'
    const blogPageUrl = '/blog'
    const contactPageUrl = '/contact'

    let folder = '';
    const server = http.createServer((req, res) => {
        const requstedPage = req.url

        let checkForCssReq = requstedPage.includes('css')
        if(checkForCssReq === false){
            folder = requstedPage

        }
        console.log(folder)
        
        switch(requstedPage){
            case homePageUrl:
                fs.readFile(path.join(__dirname, homePage), (err, data) => {
                    res.end(data)
                    
                })
                break;
            case aboutPageUrl:
                fs.readFile(path.join(__dirname, aboutPage), (err, data) => {
                    res.end(data)
                    
                })
                break;
            case blogPageUrl:
                fs.readFile(path.join(__dirname, blogPage), (err, data) => {
                    res.end(data)  
                })
                break;
            case contactPageUrl:
                fs.readFile(path.join(__dirname, contactPage), (err, data) => {
                    res.end(data)  
                })
                break;
                case '/style.css':
                    console.log(requstedPage)
                    fs.readFile(path.join(__dirname, `/client${folder}/style.css`), (err, data) => {
                        res.end(data)
                    
                    })
                break
            default:
                res.end()
                break;


        }


        
    })

    server.listen(11000)

}
createServers()


