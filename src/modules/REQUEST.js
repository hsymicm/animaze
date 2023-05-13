import ANILIST from '@/modules/ANILIST';

const query = `
query ($id: Int, $search: String, $page: Int, $isAdult:Boolean = false, $perPage: Int, $sortType: [MediaSort], $genre: [String]) {
  Page (page: $page, perPage: $perPage) {
    media (id: $id, search: $search, type: ANIME, sort: $sortType, genre_in: $genre, isAdult:$isAdult) {
      id
      title { english romaji }
      cover:coverImage { url:extraLarge color }
      banner:bannerImage
      genres
      type:format
      episodes
      isAdult
    }
  }
}`;

// const query2 = `
// query ($page:Int = 1 $id:Int $type:MediaType $isAdult:Boolean = false $search:String $format:[MediaFormat] $status:MediaStatus $countryOfOrigin:CountryCode $source:MediaSource $season:MediaSeason $seasonYear:Int $year:String $onList:Boolean $yearLesser:FuzzyDateInt $yearGreater:FuzzyDateInt $episodeLesser:Int $episodeGreater:Int $durationLesser:Int $durationGreater:Int $chapterLesser:Int $chapterGreater:Int $volumeLesser:Int $volumeGreater:Int $licensedBy:[Int]$isLicensed:Boolean $genres:[String]$excludedGenres:[String]$tags:[String]$excludedTags:[String]$minimumTagRank:Int $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]){
//   Page (page:$page,perPage:20) {
//     pageInfo {
//       total
//       perPage
//       currentPage
//       lastPage
//       hasNextPage
//     }
//     media (id: $id type: $type season: $season format_in: $format status: $status countryOfOrigin:$countryOfOrigin source:$source search:$search onList:$onList seasonYear:$seasonYear startDate_like:$year startDate_lesser:$yearLesser startDate_greater:$yearGreater episodes_lesser:$episodeLesser episodes_greater:$episodeGreater duration_lesser:$durationLesser duration_greater:$durationGreater chapters_lesser:$chapterLesser chapters_greater:$chapterGreater volumes_lesser:$volumeLesser volumes_greater:$volumeGreater licensedById_in:$licensedBy isLicensed:$isLicensed genre_in:$genres genre_not_in:$excludedGenres tag_in:$tags tag_not_in:$excludedTags minimumTagRank:$minimumTagRank sort:$sort isAdult:$isAdult){
//       id
//       title
//       coverImage { url:extraLarge large color }
//       startDate { year month day }
//       endDate { year month day }
//       bannerImage
//       season
//       seasonYear
//       description
//       type
//       format
//       status(version:2)
//       episodes
//       duration
//       chapters
//       volumes
//       genres
//       isAdult
//       averageScore
//       popularity
//       nextAiringEpisode{airingAt timeUntilAiring episode}
//       mediaListEntry{id status}
//       studios(isMain:true){
//         edges{isMain node{id name}}
//       }
//     }
//   }
// }`;

export default async function REQUEST(search) {
  return ANILIST(query, {
    perPage: 5,
    page: 1,
    sortType: ['POPULARITY_DESC'],
    search,
  });
}
