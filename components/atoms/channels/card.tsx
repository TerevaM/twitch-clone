interface UserProps {
  name: string;
  id: string;
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
        id={props.id}
      >
        <span className="viewers">{rand_viewers} spectateurs</span>
        <span className="live">live</span>
      </div>
      <div className="card-user-infos">
        <div className="logo-channels"></div>
        <div id="user-card-stats">
          <div className="title-card">
            <h3>{props.title}</h3>
            <svg
              viewBox="0 0 20 20"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
            </svg>
          </div>
          <h6>{props.name}</h6>
          <h6>{props.category}</h6>
        </div>
      </div>
    </li>
  );
}
