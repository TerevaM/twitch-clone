interface UserProps {
  name: string;
  url: string;
  title: string;
  category: string;
}

const colors = [
  "red",
  "green",
  "yellow",
  "pink",
  "orange",
  "grey",
  "purple",
  "lightblue",
];

export default function Card(props: UserProps) {
  let color = colors[Math.floor(Math.random() * colors.length)];
  const rand_viewers = Math.ceil(Math.random() * 800 + Math.random());
  return (
    <li>
      <div
        className="shadow-video"
        style={{
          backgroundColor: color,
        }}
      >
        <div
          className="border1"
          style={{
            backgroundColor: color,
          }}
        ></div>
        <div
          className="border2"
          style={{
            backgroundColor: color,
          }}
        ></div>
      </div>
      <div
        className="card-video"
        style={{
          backgroundImage: `url(../assets/pictures/${props.url})`,
        }}
      >
        <span className="viewers">{rand_viewers} spectateurs</span>
        <span className="live">live</span>
      </div>
      <div className="card-user-infos">
        <div className="logo-channels"></div>
        <div id="user-card-stats">
          <h3>{props.title}</h3>
          <h6>{props.name}</h6>
          <h6>{props.category}</h6>
        </div>
      </div>
    </li>
  );
}
