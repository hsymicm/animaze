import '@/assets/styles/Style.css'
import '@/assets/styles/Watchlist.css'
import grid from '@/assets/svgs/grip-solid.svg'
import list from '@/assets/svgs/list-solid.svg'
import TableShow from '@/components/TableShow'
import GridShow from '@/components/GridShow'
import { useState } from 'react'

export default function Watchlist() {
    // MOCK DATA
    const [isList, setIsList] = useState(true)

    const data = {
        "Watching": [
            {
                id: 1,
                title: "BOCCHI THE ROCK!",
                cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-5Y8rYzg982sq.png",
                score: 90,
                progress: "10/12",
                type: "TV",
            },
            {
                id: 2,
                title: "Kaguya-sama: Love is War -Ultra Romantic-",
                cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx125367-bl5vGalMH2cC.png",
                score: 84,
                progress: "5/12",
                type: "TV",
            },
        ],
        "Completed": [
            {
                id: 1,
                title: "One Piece Film: Red",
                cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141902-fTyoTk8F8qOl.jpg",
                score: 65,
                progress: undefined,
                type: "Movie",
            },
            {
                id: 2,
                title: "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.",
                cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106479-JmPk1F5ubMtm.png",
                score: 80,
                progress: undefined,
                type: "TV",
            },
            {
                id: 3,
                title: "Death Note",
                cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg",
                score: 88,
                progress: undefined,
                type: "TV",
            }
        ],
        "Planning": [
            {
                id: 1,
                title: "Chainsaw Man",
                cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png",
                score: undefined,
                progress: undefined,
                type: "TV",
            }
        ]
    }

    return (
        <main className='glb-container split-container text-white'>
            <div id='aside' className='aside'></div>
            <div id='content' className='content'>
                <div className='view-mode'>
                    <div
                    onClick={() => setIsList(true)}
                    className={isList ? 'view active' : 'view'}
                    >
                        <img src={list} width={'20px'} alt="" />
                    </div>
                    <div
                    onClick={() => setIsList(false)}
                    className={!isList ? 'view active' : 'view'}
                    >
                        <img src={grid} width={'20px'} alt="" />
                    </div>
                </div>
                {!isList && Object.keys(data).map(key => (
                    <div key={key} className='table-container'>
                        <GridShow title={key} shows={data[key]} />
                    </div>
                ))}
                {isList && Object.keys(data).map(key => (
                    <div key={key} className='table-container'>
                        <TableShow title={key} shows={data[key]} />
                    </div>
                ))}
            </div>
        </main>
    )
}