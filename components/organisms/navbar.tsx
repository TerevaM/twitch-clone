import "@/css/navbar.css";
import Image from "next/image";
import TwitchLogo from "@/pictures/ahouioui.png";
export default function Navbar() {
  return (
    <>
      <nav>
        <div id="left-content">
          <Image src={TwitchLogo} alt="twitch logo" />
          <ul>
            <li>Suivis</li>
            <li>Parcourir</li>
            <li className="hide-icon">
              <svg
                type="color-fill-current"
                width="20px"
                height="20px"
                version="1.1"
                viewBox="0 0 20 20"
                x="0px"
                y="0px"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </li>
            <li className="hide-icon">
              <svg
                type="color-fill-current"
                width="20px"
                height="20px"
                version="1.1"
                viewBox="0 0 20 20"
                x="0px"
                y="0px"
              >
                <g>
                  <path d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2V4h8a2 2 0 00-2-2H5z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M7 8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V8zm2 0h6v8H9V8z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </li>
            <li id="others">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
              </svg>
            </li>
          </ul>
        </div>
        <div id="search">
          <label>
            <svg
              width="100%"
              height="100%"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
              data-a-selector="tw-core-button-icon"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
                  clip-rule="evenodd"
                ></path>
              </g>
            </svg>
          </label>
          <input type="text" placeholder="Rechercher" />
        </div>
        <ul id="right-content">
          <li className="hide-icon">
            <a href="#">
              <svg
                width="100%"
                height="100%"
                version="1.1"
                viewBox="0 0 20 20"
                x="0px"
                y="0px"
                data-a-selector="tw-core-button-icon"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0 1 11 11H9a3.001 3.001 0 0 1-2.83-2H4v6h12V9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
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
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M10.114 9.622 11 7 7.175 9.323a.382.382 0 0 0 .013.65l.698.405L7 13l3.825-2.323a.382.382 0 0 0-.012-.65l-.699-.405z"></path>
                <path
                  fill-rule="evenodd"
                  d="M18 7h-2V4H2v12h14v-3h2V7zm-4-1v3h2v2h-2v3H4V6h10z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <div id="account"></div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
