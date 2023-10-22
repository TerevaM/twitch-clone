interface UserProps {
  name: string;
  live: boolean;
}


export default function ChannelCellule(props: UserProps) {
  const rand_viewers = Math.ceil(Math.random() * 800 + Math.random());
  return (
    <li>
      <div>
        <div className="logo-channels"></div>
        <h5>{props.name}</h5>
      </div>
      { props.live ? (
        <>
          <h6><div className="in-live"></div>{rand_viewers}</h6>
        </>
      ) : (
        <h6>Déconnecté(e)</h6>
      )}
    </li>
  );
}
