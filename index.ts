import { default as wishlist } from './json/wishlist.json'
import { default as browse } from './json/browse.json'
import fs from 'fs'

try {
    const videoPath: string[] = browse.flatMap((item) => {
        return item.lenses.map((lense) => lense.videoPath)
    })

    const flareImage: (string | null)[] = browse.flatMap((item) => {
        return item.lenses.map((lense) => lense.flareImage)
    })

    const previewImage: string[] = browse.flatMap((item) => {
        return item.lenses.map((lense) => lense.preview)
    })

    const iconImage: string[] = browse.flatMap((item) => {
        return item.lenses.map((lense) => lense.icon)
    })

    const videoURLsPath = `${__dirname}/urls/videoURLs.txt`
    const flareImageURLsPath = `${__dirname}/urls/flareImageURLs.txt`
    const previewImageURLsPath = `${__dirname}/urls/previewImageURLs.txt`
    const iconImageURLsPath = `${__dirname}/urls/iconImageURLs.txt`

    fs.mkdirSync(`${__dirname}/urls`, { recursive: true })

    fs.writeFileSync(videoURLsPath, videoPath.join('\n'))
    fs.writeFileSync(flareImageURLsPath, flareImage.join('\n'))
    fs.writeFileSync(previewImageURLsPath, previewImage.join('\n'))
    fs.writeFileSync(iconImageURLsPath, iconImage.join('\n'))

    console.info('videoURLs.txt, flareImageURLs.txt, previewImageURLs.txt and iconImageURLs.txt  created successfully with data!')
}
catch (err) {
    console.error(err)
}
