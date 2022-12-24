import '@/assets/styles/Style.css'
import '@/assets/styles/Home.css'
import Button from '@/components/Button'
import Points from '@/assets/data/Points'
import { useNavigate } from 'react-router-dom'
import ActionLine from '@/assets/img/ActionLine.gif'

console.log(Points)
export default function Home({onEmit}) {
    const navigate = useNavigate()
    return (
        <>
            <header className="header-full glb-padding">
                <div className="header-title text-white">
                    <h1>The Next-Generation Anime Platform</h1>
                    <p>Discover and track your favorite anime shows with AniWatch!</p>
                    <div className='header-btn'>
                        <Button
                            label="Add Anime"
                            style={{marginRight: '24px', fontSize: '1.1rem'}}
                            className="btn btn-primary"
                            width="160px"
                            onClick={onEmit}
                        />
                        <Button
                            label="Watchlist"
                            style={{fontSize: '1.1rem'}}
                            className="btn btn-border"
                            width="160px"
                            onClick={() => {
                                navigate(`${import.meta.env.BASE_URL}watchlist`)
                            }}
                        />
                    </div>
                </div>
                <img src={ActionLine}/>
            </header>
            <div className="points glb-padding">
                {Object.entries(Points).map(([key, value]) => (
                    <div className="point text-white">
                        <div className="point-number">{+key+1}</div>
                        <h3 className="point-title">{value.point}</h3>
                        <p className="point-context">{value.context}</p>
                    </div>
                ))}
            </div>
        </>
    )
}