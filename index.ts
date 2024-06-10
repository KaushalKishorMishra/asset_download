import { default as wishlist } from './json/wishlist.json'
import { default as browse } from './json/browse.json'
import fs from 'fs'

type TURL = string[][]

try {
    const videoPath: TURL = wishlist.map((item) => {
        return item.lenses.map((lense) => lense.videoPath)
    })

    const flareImage: (TURL | null) = wishlist.map((item) => {
        return item.lenses.map((lense) => lense.flareImage ?? '')
    })

    const previewImage: TURL = wishlist.map((item) => {
        return item.lenses.map((lense) => lense.preview)
    })

    const videoURLsPath = `${__dirname}/urls/videoURLs.txt`
    const flareImageURLsPath = `${__dirname}/urls/flareImageURLs.txt`
    const previewImageURLsPath = `${__dirname}/urls/previewImageURLs.txt`

    fs.mkdirSync(`${__dirname}/urls`, { recursive: true })

    fs.writeFileSync(videoURLsPath, videoPath.join('\n'))
    fs.writeFileSync(flareImageURLsPath, flareImage.join('\n'))
    fs.writeFileSync(previewImageURLsPath, previewImage.join('\n'))

    console.info('videoURLs.txt, flareImageURLs.txt and previewImageURLs.txt  created successfully with data!')
}
catch (err) {
    console.error(err)
}
