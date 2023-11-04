import Card from "../atoms/channels/card";

interface CardProps {
  categoryGame: string;
  category_id: number;
}

/* images overwatch */
const overwatch = [
  {
    name: "GF_Iguel",
    id: "gf_iguel",
    title: "Rankeds Compétitifs : Montée en SR"
  },
  {
    name: "Laraa_tv",
    id: "laraa_tv",
    title: "Stratégies de Maître : Analyses Parties"
  },
  {
    name: "SoSucre",
    id: "sosucre",
    title: "🚀 Grind de Compétition pour Top Classement"
  },
  {
    name: "Necros",
    id: "necros",
    title: "🎮 Amusement avec les Abonnés !"
  },
  {
    name: "Atrandos",
    id: "atrandos",
    title: "🎉 Nouveaux Skins et Événements"
  }
]

/* images valorant */
const valorant = [
  {
    name: "brokybrawkstv",
    id: "brokybrawkstv",
    title: "🔥 Rankeds Valorant ",
  },
  {
    name: "grimm",
    id: "grimm",
    title: "Tir de Précision : Gameplay Valorant",
  },
  {
    name: "loupiote3",
    id: "loupiote3",
    title: "🚀 Nouveaux Skins Époustouflants",
  },
  {
    name: "Sniper_Biscuit",
    id: "sniper_biscuit",
    title: "🎮 Valorant Fun en Équipe ! 🤩",
  },
  {
    name: "T2kimchi",
    id: "t2kimchi",
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
                id={user.id}
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
