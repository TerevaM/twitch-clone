interface UserProps {
  name: string;
  live: boolean;
  category?: string;
}


export default function ChannelCellule(props: UserProps) {
  const rand_viewers = Math.ceil(Math.random() * 800 + Math.random());
  return (
    <li>
      <div className="users-channel">
        <div className="logo-channels"></div>
        <div>
          <h5>{props.name}</h5>
          <p>{props.category}</p>
        </div>
      </div>
      { props.live ? (
        <>
          <h6><div className="in-live"></div>{rand_viewers}</h6>
        </>
      ) : (
        <h6 className="disconnected">Déconnecté(e)</h6>
      )}
      
    </li>
  );
}
