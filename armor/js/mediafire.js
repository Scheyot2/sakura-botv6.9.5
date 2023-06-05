const axios = require('axios')
const cheerio = require('cheerio')

const mediafire = async (link) => {
let req = await axios.get(link) 
let $ = cheerio.load(req.data)
let url = $('a#downloadButton').attr('href')
let size = $('a#downloadButton').text().trim().replace(/(Download)/g, '').replace(/([\(\)])/g, '')
let title = $('div.dl-btn-label').text().trim()
return {url, size, title}
}

module.exports = { mediafire }