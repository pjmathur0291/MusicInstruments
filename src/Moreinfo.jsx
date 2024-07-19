import React, { useState, useRef } from 'react';
import { Link, useParams } from "react-router-dom"
import Navbar from "./Navbar";
import logoArtist from './assets/images_prev_ui.png'
import Footer from "./Footer";




const Moreinfo = ({ artist }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    const { id } = useParams()
    const matchid = artist.find((i) => i.id == id)
    // console.log(matchid);
    return (
        <div>
            <Navbar />
            <div key={matchid.id}>
                <div className='moreInfoMainDiv'>
                    <div className='mainCenter'>
                        <div className="aristDivBox editImage moreInfoArtistBlock" style={{ background: `url(${matchid.image})` }}>
                            <div className='moreInfoArtistBlockCopy'>
                                <img src={logoArtist} className="aristDivBoxImg" width="200px" height="200px" alt="" />
                                <h3 className="artistName">{matchid.Name}</h3>
                                <div className="readMore">
                                    {/* <Link to={`/Moreinfo/${matchid.id}`}><button className="readMoreBTN">Click to get Songs</button></Link> */}
                                    <button onClick={handlePlayPause} className='readMoreBTN indiPlayBTN'>
                                        {isPlaying ? 'Pause' : 'Play'}
                                    </button>
                                    {matchid.song && (
                                        <audio ref={audioRef} src={matchid.song} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className='artistInfo'>
                            <span>Name: </span><span className='indiArtistName'>{matchid.Name}</span>
                        </div>
                        <div className='artistInfo'>
                            <span>Category: </span><span className='indiArtistName'>{matchid.categories.join(', ')}
                            </span>
                        </div>
                        <div className='artistInfo'>
                            <span>About: </span>
                            <p className='indiArtistName aboutArtist'>
                                {matchid.about}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Moreinfo;
