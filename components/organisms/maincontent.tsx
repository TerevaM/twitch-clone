import "@/css/maincontent.css";
import Channels from "@/components/organisms/channels";
import Card from "../atoms/channels/card";
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
        <div id="channel-of">
          <h4>
            Chaînes de <span>Overwatch 2</span> recommandées
          </h4>
          <ul className="channels-card">
            <Card
              name="GF_Iguel"
              url="live_user_gf_iguel-440x248.jpg"
              title="Rankeds Compétitifs : Montée en SR"
              category="Overwatch 2"
            />
            <Card
              name="Laraa_tv"
              url="live_user_laraa_tv-440x248.jpg"
              title="Stratégies de Maître : Analyses Parties"
              category="Overwatch 2"
            />
            <Card
              name="SoSucre"
              url="live_user_sosucre-440x248.jpg"
              title="🚀 Grind de Compétition pour Top Classement"
              category="Overwatch 2"
            />
            <Card
              name="Necros"
              url="live_user_necros-440x248.jpg"
              title="🎮 Amusement avec les Abonnés !"
              category="Overwatch 2"
            />
            <Card
              name="Atrandos"
              url="live_user_atrandos-440x248.jpg"
              title="🎉 Nouveaux Skins et Événements"
              category="Overwatch 2"
            />
          </ul>
          <div className="line-more">
          <span className="more-cards">
            <h4>
            Afficher plus
            </h4>
            <svg viewBox="0 0 20 20">
              <path d="M14.5 6.5 10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
            </svg>
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}
