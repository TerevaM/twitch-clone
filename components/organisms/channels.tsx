import "@/css/channels.css";

export default function Channels() {
  return (
    <>
      <div id="channels">
        <div className="title-channels">
          <h3>Pour vous</h3>
          <svg
            width="100%"
            height="100%"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            aria-hidden="true"
            focusable="false"
          >
            <g>
              <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
            </g>
          </svg>
        </div>
        <div className="title-channels">
          <h4>Chaînes suivies</h4>
          <svg width="2rem" height="2rem" viewBox="0 0 20 20">
            <path d="M11 6 7 2 3 6l1.5 1.5L6 6v6h2V6l1.5 1.5L11 6Zm6 8-4 4-4-4 1.5-1.5L12 14V8h2v6l1.5-1.5L17 14Z"></path>
          </svg>
        </div>
        <ul className="channels-list">
          <li className="hide-icons-channel">
            <svg width="2rem" height="2rem" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M9.171 4.171A4 4 0 0 0 6.343 3H6a4 4 0 0 0-4 4v.343a4 4 0 0 0 1.172 2.829L10 17l6.828-6.828A4 4 0 0 0 18 7.343V7a4 4 0 0 0-4-4h-.343a4 4 0 0 0-2.829 1.172L10 5l-.829-.829zm.829 10 5.414-5.414A2 2 0 0 0 16 7.343V7a2 2 0 0 0-2-2h-.343a2 2 0 0 0-1.414.586L10 7.828 7.757 5.586A2 2 0 0 0 6.343 5H6a2 2 0 0 0-2 2v.343a2 2 0 0 0 .586 1.414L10 14.172z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <p>Afficher plus</p>
          </li>
        </ul>
        <div className="title-channels">
          <h4>Chaînes recommandées</h4>
        </div>
        <ul className="channels-list">
          <li className="hide-icons-channel">
            <svg width="2rem" height="2rem" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M12.002 3.999a2 2 0 0 1 2 2v2L18 6v8l-3.998-2v2a2 2 0 0 1-2 1.999h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8zM12 6H4v8h8V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <div>
              <div className="logo-channels"></div>
              <h5>Nom</h5>
            </div>
            <h6>Déconnecté(e)</h6>
          </li>
          <li>
            <p>Afficher plus</p>
          </li>
        </ul>
      </div>
    </>
  );
}
