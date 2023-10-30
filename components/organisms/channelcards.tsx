import Card from "../atoms/channels/card";

interface CardProps {
  categoryGame: string;
}

export default function ChannelCards(props: CardProps) {
  return (
    <>
      <div id="channel-of">
          <h4>
            Chaînes de <span>{props.categoryGame}</span> recommandées
          </h4>
          <ul className="channels-card">
            <Card
              name="GF_Iguel"
              url="live_user_gf_iguel-440x248.jpg"
              title="Rankeds Compétitifs : Montée en SR"
              category={props.categoryGame}
            />
            <Card
              name="Laraa_tv"
              url="live_user_laraa_tv-440x248.jpg"
              title="Stratégies de Maître : Analyses Parties"
              category={props.categoryGame}
            />
            <Card
              name="SoSucre"
              url="live_user_sosucre-440x248.jpg"
              title="🚀 Grind de Compétition pour Top Classement"
              category={props.categoryGame}
            />
            <Card
              name="Necros"
              url="live_user_necros-440x248.jpg"
              title="🎮 Amusement avec les Abonnés !"
              category={props.categoryGame}
            />
            <Card
              name="Atrandos"
              url="live_user_atrandos-440x248.jpg"
              title="🎉 Nouveaux Skins et Événements"
              category={props.categoryGame}
            />
          </ul>
          <div className="line-more">
          <span className="more-cards">
            <h4>
            Afficher plus
            </h4>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5 6.5 10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5"></path>
</svg>
          </span>
          </div>
        </div>
    </>
  );
}
