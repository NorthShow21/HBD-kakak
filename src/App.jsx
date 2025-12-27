import hbd from './assets/hbd.png'
import bg from './assets/bg.png'
import photo1 from './assets/photo1.jpeg'
import photo2 from './assets/photo2.jpeg'
import photo3 from './assets/photo3.jpeg'
import song from "./assets/lagu.mp3";
import './App.css'

import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const audioRef = useRef(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const startMusic = () => {
    if (!unlocked && audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.play();
      setUnlocked(true);
    }
  };

  return (
    <>
      {/* AUDIO ELEMENT */}
      <audio ref={audioRef} src={song} loop preload="auto" />

      <div className="page" onClick={startMusic}>
        <img src={bg} alt="background" className="bg-image" />

        {showContent && (
          <>
            <Confetti
              width={width}
              height={height}
              numberOfPieces={250}
              recycle={false}
            />

            {!unlocked && (
              <div className="tap-hint">
                🔊 Tap anywhere for sound
              </div>
            )}

            <div className="content fade-in">
              <div className="hbd-image animate">
                <img src={hbd} alt="" />
              </div>

              <div className="photo-grid">
                <div className="photo1 animate" style={{ animationDelay: "0.4s" }}>
                  <img src={photo1} alt="" />
                  <h2>2000s</h2>
                </div>
                <div className="photo2 animate" style={{ animationDelay: "0.8s" }}>
                  <h2>2010s</h2>
                  <img src={photo2} alt="" />
                </div>
                <div className="photo3 animate" style={{ animationDelay: "1.2s" }}>
                  <img src={photo3} alt="" />
                  <h2>2025</h2>
                </div>
              </div>

              <div className="ucapan animate" style={{ animationDelay: "1.6s" }}>
                <div className="box">
                  <h3 className="typewriter">Dear Kak Noel,</h3>
                  <p className="animate" style={{ animationDelay: "4s" }}>
                    Udah 25 tahun aja, tua banget. Jujurly to be honest, kita gatau mau kasih kado apa,
                    jadi kita bikin website buat kadonya. Karena apa? karena kita anak computer science brooo.
                    Jadi yaa... Happy Birthday ya kak, wish you all the best, semoga sehat selalu,
                    panjang umur, dan semoga anaknya sehat
                  </p>
                  <h3 className="sign animate" style={{ animationDelay: "5s" }}>
                    Love, Nando & Abel &lt;3
                  </h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
