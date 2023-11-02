import Card from "../atoms/channels/card";

interface CardProps {
  categoryGame: string;
  category_id: number;
}

/* images overwatch */
const overwatch = [
  {
    name: "GF_Iguel",
    url: "live_user_gf_iguel-440x248.jpg",
    title: "Rankeds Compétitifs : Montée en SR"
  },
  {
    name: "Laraa_tv",
    url: "live_user_laraa_tv-440x248.jpg",
    title: "Stratégies de Maître : Analyses Parties"
  },
  {
    name: "SoSucre",
    url: "live_user_sosucre-440x248.jpg",
    title: "🚀 Grind de Compétition pour Top Classement"
  },
  {
    name: "Necros",
    url: "live_user_necros-440x248.jpg",
    title: "🎮 Amusement avec les Abonnés !"
  },
  {
    name: "Atrandos",
    url: "live_user_atrandos-440x248.jpg",
    title: "🎉 Nouveaux Skins et Événements"
  }
]

/* images valorant */
const valorant = [
  {
    name: "brokybrawkstv",
    url: "live_user_brokybrawkstv-440x248.jpg",
    title: "🔥 Rankeds Valorant ",
  },
  {
    name: "grimm",
    url: "live_user_grimm-440x248.jpg",
    title: "Tir de Précision : Gameplay Valorant",
  },
  {
    name: "loupiote3",
    url: "live_user_loupiote3-440x248.jpg",
    title: "🚀 Nouveaux Skins Époustouflants",
  },
  {
    name: "Sniper_Biscuit",
    url: "live_user_sniper_biscuit-440x248.jpg",
    title: "🎮 Valorant Fun en Équipe ! 🤩",
  },
  {
    name: "T2kimchi",
    url: "live_user_t2kimchi-440x248.jpg",
    title: "🏆 Tournois et Entraînements Valorant 🚀",
  },
];

export default function ChannelCards(props: CardProps) {
  /* props choix des images par categorie */
  const category = [overwatch, valorant];
  return (
    <>
      <div id="channel-of">
          <h4>
            Chaînes de <span>{props.categoryGame}</span> recommandées
          </h4>
          <ul className="channels-card">
          {category[props.category_id].map((user, index) => (
            <>
              <Card
                key={index}
                name={user.name}
                url={user.url}
                title={user.title}
                category={props.categoryGame}
              />
            </>
          ))}
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
