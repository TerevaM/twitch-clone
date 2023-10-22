import Channels from "@/components/organisms/channels";
import "@/css/maincontent.css";
import Leftbutton from "../atoms/channels/svg/leftbutton";
import Rightbutton from "../atoms/channels/svg/rightbutton";

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
            <div id="picture-main-caroussel"></div>
            <section id="infos-main-caroussel">
              <div id="user-main-caroussel"></div>
              <p>
                Onutrem est un streamer matinal multi-gaming passionné de jeux
                indé. En tant que dev, il a créé des fonctionnalités uniques qui
                offrent une interaction ludique entre le chat et le live.
              </p>
            </section>
          </div>
        </div>
        <ul className="channels-card"></ul>
      </div>
    </div>
  );
}
