import { default as wishlist } from './wishlist.json'
import fs from 'fs'

type IVideoURL = string[]

try {
    const videoPath: IVideoURL = wishlist.map((item) => {
        return item.videoPath
    })

    const flareImage: IVideoURL = wishlist.map((item) => {
        return item.flareImage
    })

    const videoURLsPath = `${__dirname}/urls/videoURLs.txt`
    const flareImageURLsPath = `${__dirname}/urls/flareImageURLs.txt`

    fs.mkdirSync(`${__dirname}/urls`, { recursive: true })

    fs.writeFileSync(videoURLsPath, videoPath.join('\n'))
    fs.writeFileSync(flareImageURLsPath, flareImage.join('\n'))
    
    console.info('videoURLs.txt and flareImageURLs.txt created successfully with data!')
}
catch (err) {
    console.error(err)
}
