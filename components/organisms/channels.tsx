import "@/css/channels/channels.css";
import ChannelCellule from "../atoms/channels/channel";
import ChannelFollow from "../atoms/channels/svg/channelfollow";
import ChannelRecommand from "../atoms/channels/svg/channelrecommand";
import ChannelClose from "../atoms/channels/svg/channelclose";
import ChannelSort from "../atoms/channels/svg/channelsort";

export default function Channels() {
  return (
    <>
      <div id="channels">
        <div className="title-channels" id="for-u">
          <h3>Pour vous</h3>
          <ChannelClose />
        </div>
        <div className="title-channels">
          <h4>Chaînes suivies</h4>
          <ChannelSort />
        </div>
        <ul className="channels-list">
          <ChannelFollow />
          <ChannelCellule name="MikraL" live={true} category="Discussion" />
          <ChannelCellule name="Kraken" live={true} category="VALORANT" />
          <ChannelCellule name="Lordfzgur" live={false} />
          <ChannelCellule name="Yassalade" live={false} />
          <ChannelCellule name="Abdallast" live={false} />
          <li>
            <p>Afficher plus</p>
          </li>
        </ul>
        <div className="title-channels">
          <h4>Chaînes recommandées</h4>
        </div>
        <ul className="channels-list">
          <ChannelRecommand />
          <ChannelCellule name="Yuyueiei" live={true} category="Discussion" />
          <ChannelCellule
            name="Chaynes"
            live={true}
            category="Mortal Kombat 1"
          />
          <ChannelCellule name="Le_V_iano" live={true} category="Discussion" />
          <ChannelCellule name="nadimelodrame" live={true} category="CSGO" />
          <ChannelCellule name="Amiralflank" live={true} category="VALORANT" />
          <li>
            <p>Afficher plus</p>
          </li>
        </ul>
      </div>
    </>
  );
}
