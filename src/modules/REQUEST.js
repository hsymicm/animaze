import ANILIST from '@/modules/ANILIST'

const query = `
query ($id: Int, $search: String, $page: Int, $perPage: Int, $sortType: [MediaSort], $genre: [String]) {
    Page (page: $page, perPage: $perPage) {
        media (id: $id, search: $search, type: ANIME, sort: $sortType, genre_in: $genre) {
            title { english romaji }
            cover:coverImage { url:extraLarge color }
            banner:bannerImage
            genres
            type:format
            episodes
            isAdult
        }
    }
}`

export default async function(search) {
    return await ANILIST(query, {
        perPage : 5,
        page : 1,
        sortType : ["POPULARITY_DESC"],
        search : search
    })
}