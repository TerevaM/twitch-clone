interface UserProps {
  name: string;
  live: boolean;
  category?: string;
  logo: string;
}


export default function ChannelCellule(props: UserProps) {
  const rand_viewers = Math.ceil(Math.random() * 800 + Math.random());
  return (
    <li>
      <div className="users-channel">
        <div className="logo-channels" id={props.logo}></div>
        <div>
          <h5>{props.name}</h5>
          <p>{props.category}</p>
        </div>
      </div>
      { props.live ? (
        <>
          {props.logo != "fefe" ? (
          <h6><div className="in-live"></div>{rand_viewers}</h6>
          ):
          (
            <h6><div className="in-live"></div>0</h6>
          )}
        </>
      ) : (
        <h6 className="disconnected">Déconnecté(e)</h6>
      )}
      
    </li>
  );
}
