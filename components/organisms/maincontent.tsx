import "@/css/maincontent.css";
import Channels from "@/components/organisms/channels";
import Leftbutton from "../atoms/channels/svg/leftbutton";
import Rightbutton from "../atoms/channels/svg/rightbutton";
import ChannelCards from "./channelcards";


export default function MainContent() {
  return (
    <div id="mainPage">
      <Channels />
      <div id="mainContent">
        <div id="caroussel">
          {/* left btn caroussel */}
          <Leftbutton />
          {/* right btn caroussel */}
          <Rightbutton />
          <div id="main-channel-caroussel">
            <span className="live">live</span>
            <div id="picture-main-caroussel"></div>
            <section id="infos-main-caroussel">
              <div id="user-main-infos">
                <div id="logo-main-caroussel"></div>
                <div>
                  <h5>DiabloX9</h5>
                  <h6>Call of duty</h6>
                  <p>62,2 k spectateurs</p>
                </div>
              </div>
              <p id="user-main-details">
                Diablox9, de son vrai nom Jonathan Wendel, est un célèbre joueur
                professionnel et streamer français, connu pour son expertise
                dans les jeux vidéo de tir à la première personne.
              </p>
            </section>
          </div>
        </div>
        <ChannelCards categoryGame="Overwatch 2"/>
        <ChannelCards categoryGame="VALORANT"/>
        
      </div>
    </div>
  );
}
