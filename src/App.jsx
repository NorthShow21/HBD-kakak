import hbd from './assets/hbd.png'
import bg from './assets/background.png'
import photo1 from './assets/photo1.jpeg'
import photo2 from './assets/photo2.jpeg'
import photo3 from './assets/photo3.jpeg'
import bloon from './assets/bloon.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div className="page">
        <img src={bg} alt="background" className="bg-image" />

        <div className="content">
          <div className="hbd-image">
            <img  src={hbd} alt="" />
          </div>
          <div className='photo-grid'>
            <div className='photo1'>
              <img src={photo1} alt="" />
              <h2>2000s</h2>
            </div>
            <div className='photo2'>
              <h2>2010s</h2>
              <img src={photo2} alt="" />
            </div>
            <div className='photo2'>
              <img src={photo3} alt="" />
              <h2>2025</h2>
            </div>
          </div>
          <div className='ucapan'>
            <h3>Dear Kak Noel,</h3>
            <br />
            <h3>Udah 25 tahun aja, tua banget. Jujurly to be honest, kita gatau mau kasih kado apa , jadi kita bikin website buat kadonya. Karena apa? karena kita anak computer science brooo. Jadi yaa...Happy Birthday ya kak, wish you all the best, semoga sehat selalu, panjang umur, dan semoga anaknya sehat</h3>
            <br />
            <h3>Love, Nando & Abel {'<'}3</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
