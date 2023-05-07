import '@/assets/styles/Style.css';
import '@/assets/styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Points from '@/assets/data/Points';
import ActionLine from '@/assets/img/ActionLineCompressed.gif';

export default function Home({ onEmit }) {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      translateY: '10vh',
    },
    show: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="header-full glb-container"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="header-title text-white"
        >
          <motion.h1 key="title" variants={item}>
            Experience Blazing Fast Anime Platform
          </motion.h1>
          <motion.p key="sub-title" variants={item}>
            Browse and organize your favorite anime shows fast and easy with
            AniMaze!
          </motion.p>
          <motion.div key="buttons" variants={item} className="header-btn">
            <Button
              label="Search Anime"
              className="btn btn-primary"
              width="180px"
              onClick={onEmit}
            />
            <Button
              label="Watchlist"
              className="btn btn-border"
              width="180px"
              onClick={() => {
                navigate('/watchlist');
              }}
            />
          </motion.div>
        </motion.div>
        <img src={ActionLine} alt="Action Line" />
      </motion.header>
      <div className="points glb-container">
        {Object.entries(Points).map(([key, value]) => (
          <div key={key} className="point text-white">
            <div className="point-number">{+key + 1}</div>
            <h3 className="point-title">{value.point}</h3>
            <p className="point-context">{value.context}</p>
          </div>
        ))}
      </div>
    </>
  );
}
