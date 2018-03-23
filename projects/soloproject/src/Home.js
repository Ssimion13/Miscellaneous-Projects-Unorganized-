import React from "react";
import {Link} from "react-router-dom"

function Home(){
  const dogeArray = ["http://longwallpapers.com/Desktop-Wallpaper/doge-wallpapers-high-resolution-For-Desktop-Wallpaper.jpg",
                     "https://imgflip.com/s/meme/Doge.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4N6reO3bKNPPMNU_dnnB03YnMF3QhwLgpoALici7mVJmvoXe",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxi8cPXm0PD6kGczJmn1Kppt-gxz27p5pAN-j0AzJlJjJzv4F6hA"];
  const dadArray = ["https://piximus.net/media/38219/collection-of-the-best-dad-jokes-2.jpg", "https://thechive.files.wordpress.com/2018/02/dad-jokes-youll-definitely-roll-your-eyes-to-xx-photos-8.jpg?quality=85&strip=info&w=600",
                    "https://funalive.com/uploads/files/article/images/dad-jokes-are-nothing-but-pure-comedic-gold-25-photos-6.jpg", "https://lafm.com.au/images/DEo7jhuUQAABYGi.jpg"];
  const questionArray = ["http://www.masala.com/sites/default/files/styles/gallery_slideshow_cache_734/public/images/2017/11/06/MAIN_0.jpg?itok=RS2t-xbq", "https://cdn4.iconfinder.com/data/icons/business-vol-4-2/100/Artboard_15-512.png",
                         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-AFJqogbETMLVcdFsE-p1nQ47kM__eFICpWYtOZxNKPP9DVO", "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/20/2012/10/silhouette.jpg"]

  function randomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }


  return(
    <div className="home" >

      <div className="homeHeader">
        <h1 className="homeText"> Make Your Day!</h1>
      </div>

      <div className= "hub">
        <Link to="/Doggos">
          <img className="image" src={randomArrayElement(dogeArray)} alt="doge" />
        </Link>

        <Link to="/DadJokes">
          <img className="image" src={randomArrayElement(dadArray)} alt="Dad" />
        </Link>

        <Link to="/RickAstley">
          <img className="image" src={randomArrayElement(questionArray)} alt="???" />
        </Link>

      </div>
    </div>
  )
}

export default Home;
