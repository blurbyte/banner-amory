import * as React from 'react';

class Sword extends React.Component {
  render() {
    return (
      <svg
        id="sword"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100"
        height="250"
      >
        <path
          fill="#3d26da"
          d="M49.811 248.758c7.391-5.292 13.85-10.385 13.85-26.885V53.466H35.968v168.407c0 16.5 6.459 21.593 13.85 26.885h-.007z"
        />
        <g>
          <defs>
            <path
              id="swordClip"
              d="M49.811 248.758c7.391-5.292 13.85-10.385 13.85-26.885V53.466H35.968v168.407c0 16.5 6.459 21.593 13.85 26.885h-.007z"
            />
          </defs>
          <clipPath id="clipPath">
            <use xlinkHref="#swordClip" overflow="visible" />
          </clipPath>
          <rect
            id="swordFill"
            clipPath="url(#clipPath)"
            x="36"
            y="54"
            fill="#b62f12"
            width="28"
            height="196"
          />
        </g>
        <path
          d="M99.719 68.832c-.144-2.439-.785-5.115-2.258-7.533-1.149-1.887-3.219-3.06-5.401-3.06a6.128 6.128 0 0 0-3.387 1.021c-2.75 1.817-3.603 5.588-1.899 8.407.264.437.58.834.937 1.187-.699-.12-1.456-.286-2.133-.565-1.318-.543-2.221-1.423-2.683-2.615-.55-1.419-.66-3.257-.334-5.621.282-2.049.855-4.228 1.703-6.474.333-.878.663-1.642.952-2.209l.019-.037 3.623-7.878H60.57l-.538-9.509c1.639-.5 2.715-1.802 3.491-2.939 1.826-2.672 2.517-5.976 1.946-9.302-.316-1.84-1.417-6.128-4.932-7.729.239-.917.36-1.852.36-2.792C60.897 5.017 55.88 0 49.713 0S38.528 5.017 38.528 11.184c0 .971.129 1.936.384 2.881-3.368 1.665-4.435 5.834-4.745 7.64-.571 3.325.119 6.629 1.945 9.302.776 1.136 1.853 2.438 3.491 2.939l-.538 9.509H10.776l3.626 7.88.037.076c.272.532.604 1.302.931 2.164.85 2.25 1.423 4.429 1.705 6.478.325 2.363.216 4.202-.334 5.621-.462 1.191-1.364 2.071-2.683 2.615-.676.279-1.433.445-2.132.565a6.12 6.12 0 0 0 .937-1.187c1.703-2.819.851-6.59-1.899-8.407a6.129 6.129 0 0 0-3.387-1.022c-2.182 0-4.251 1.172-5.401 3.06C.702 63.716.062 66.392-.082 68.83c-.208 3.502 1.145 6.542 4.037 8.131 1.725.948 3.755 1.409 6.209 1.409.66 0 1.349-.032 2.106-.099 2.921-.257 5.23-.867 7.268-1.918a13.985 13.985 0 0 0 4.894-4.169c-1.83 2.973-3.258 6.391-4.256 10.192-1.017 3.907-1.553 8.122-1.595 12.528l-.058 6.162 1.988.03c.11.002 11.033.169 14.286.45l.172.015v118.203c0 14.703 1.688 20.519 14.849 30.235 13.161-9.716 14.849-15.657 14.849-30.235v-77.238c.479-.109.98-.208 1.503-.295 2.063-.327 4.408-.493 6.968-.493l.618.003 5.842.057.058-5.918c.036-3.679-.104-6.94-.428-9.972-.406-3.767-1.094-7.129-2.102-10.277-1.184-3.703-2.845-7.064-4.939-9.992a33.414 33.414 0 0 0-3.727-4.342 32.361 32.361 0 0 0-2.552-2.228l-1.24-.98V54.455h8.186c-1.399 6.67-.936 11.995 1.408 16.25 1.328 2.41 3.347 4.364 5.838 5.649 2.038 1.052 4.347 1.661 7.268 1.918.757.067 1.446.099 2.106.099 2.453 0 4.484-.461 6.209-1.409 2.891-1.589 4.244-4.629 4.036-8.13zM36.968 54.466h7.54l-.13 4.691c-2.642.366-5.124 1.045-7.41 2.019v-6.71zm-1.999 34.602c-1.18-.086-2.395-.156-3.63-.208.165-1.215.383-2.39.653-3.51.672-2.8 1.671-5.277 2.978-7.386v11.104zm0-26.939a26.48 26.48 0 0 0-4.46 3 28.304 28.304 0 0 0-5.25 5.783c.039-.068.078-.137.116-.207 2.344-4.254 2.807-9.579 1.408-16.25h8.187v7.674zm14.349 77.065a20.082 20.082 0 0 0-2.666 4.772c-1.446 3.693-1.829 7.339-2.001 10.107a67.282 67.282 0 0 0-.092 4.694l.103 5.543c.047 2.438.096 4.959.169 7.44.048 1.729.093 3.459.137 5.188.103 3.957.209 8.048.352 12.078l.04.571c.147 2.183.479 3.869 3.405 5.683l.554.343v51.532c-12.34-9.11-12.349-15.957-12.349-27.38V113.411c6.023.273 12.349 2.612 12.349 14.888v10.895zm0-18.249c-2.193-6.843-7.615-8.324-12.349-8.535V75.298a15.048 15.048 0 0 1 4.536-3.42c2.149-1.084 4.779-1.708 7.813-1.871v50.938zm13.349 98.82c0 11.423-.009 18.269-12.349 27.38v-51.532l.554-.343c2.931-1.817 3.261-3.507 3.407-5.697l.038-.557c.143-4.029.249-8.121.352-12.078.045-1.729.089-3.458.137-5.185.073-2.484.122-5.005.169-7.443l.113-5.468c.048-1.612.119-2.827.231-3.944.278-2.821.776-5.009 1.523-6.686.801-1.792 1.864-3.055 3.356-3.979.693-.435 1.521-.815 2.469-1.141v76.673zm0-88.597c-2.474.583-5.637 1.589-8.63 3.575a19.557 19.557 0 0 0-3.719 3.222v-41.04c0-12.275 6.326-14.615 12.349-14.888v49.131zm0-50.132c-4.734.212-10.157 1.692-12.349 8.535v-19.61l4.832-.163h7.517v11.238zm0-12.237h-7.165l-.374-14.333h7.54v14.333zm2.943 50.616c1.038 3.095 1.709 6.68 2.04 10.917a45.97 45.97 0 0 0-2.983.421v-13.745c.347.772.662 1.576.943 2.407z"
          fill="#e2abff"
        />
        <path
          fill="#3d26da"
          d="M18.619 74.577c-1.799.928-3.873 1.469-6.526 1.703a21.8 21.8 0 0 1-1.931.092c-2.107 0-3.824-.38-5.246-1.162-2.198-1.208-3.164-3.549-3.003-6.26.125-2.119.664-4.466 1.97-6.61.789-1.295 2.204-2.1 3.693-2.1.812 0 1.602.239 2.284.69 1.867 1.233 2.445 3.792 1.29 5.704-.756 1.252-2.15 2.03-3.638 2.03a4.25 4.25 0 0 1-1.016-.123c-.068.59-.051 1.196.185 1.659.237.465.874.754 1.893.86.289.03.597.045.915.045.67 0 1.4-.064 2.297-.202.93-.143 2.018-.345 3.033-.764 1.818-.75 3.127-2.044 3.785-3.741.676-1.744.824-3.908.451-6.616-.302-2.198-.913-4.523-1.815-6.912-.36-.948-.714-1.769-1.022-2.37l-2.321-5.044h30.905l-.234 7H24.242c.123.446.232.871.331 1.284 1.59 6.72 1.279 11.954-.951 16.001-1.136 2.061-2.866 3.733-5.003 4.836zm79.103-5.627c-.125-2.119-.664-4.466-1.97-6.61-.789-1.295-2.204-2.1-3.693-2.1-.812 0-1.602.239-2.284.69-1.867 1.233-2.445 3.792-1.29 5.704.756 1.252 2.15 2.03 3.638 2.03a4.25 4.25 0 0 0 1.016-.123c.068.59.051 1.196-.186 1.66-.237.465-.874.754-1.893.86-.289.03-.597.045-.915.045-.67 0-1.4-.064-2.297-.202-.93-.143-2.018-.345-3.033-.764-1.818-.75-3.127-2.044-3.785-3.741-.676-1.744-.824-3.908-.451-6.616.302-2.198.913-4.523 1.814-6.91.36-.95.714-1.77 1.042-2.41l2.302-5.005H54.832l.234 7h20.327c-.123.446-.232.872-.331 1.285-1.59 6.719-1.279 11.952.951 16 1.136 2.062 2.866 3.734 5.003 4.837 1.799.928 3.873 1.469 6.526 1.703.7.062 1.332.092 1.931.092 2.107 0 3.824-.38 5.246-1.162 2.198-1.211 3.164-3.551 3.003-6.263zM49.818 193.57c2.5-1.55 2.346-2.638 2.5-4.625.203-5.75.329-11.5.488-17.25.084-2.875.136-5.75.192-8.625l.09-4.286c.041-1.382.106-2.751.24-4.081.261-2.656.752-5.205 1.687-7.306.94-2.105 2.261-3.706 4.119-4.857 1.849-1.16 4.213-1.862 6.722-2.282 2.527-.401 5.205-.542 7.919-.515l3.842.038.038-3.918c.031-3.21-.066-6.456-.417-9.738-.354-3.279-.968-6.6-2.019-9.883-1.048-3.277-2.572-6.516-4.658-9.433a31.379 31.379 0 0 0-3.499-4.078 30.567 30.567 0 0 0-2.396-2.091v12.184c1.174 1.813 2.117 3.816 2.84 5.957 1.388 4.138 2.022 8.696 2.265 13.369-1.734.126-3.485.33-5.254.663-3.124.626-6.381 1.611-9.375 3.598a17.345 17.345 0 0 0-3.992 3.664c-1.135 1.426-2.005 3.018-2.637 4.622-1.264 3.228-1.677 6.437-1.867 9.499a64.691 64.691 0 0 0-.09 4.536l.079 4.339c.056 2.875.108 5.75.192 8.625.159 5.75.285 11.5.488 17.25.16 2.001.003 3.074 2.503 4.624zm-.001 53.945c.001 0 .001 0 0 0zM63.498 22.044c-.424-2.467-1.63-5.528-4.197-6.41-2.657-.913-5.532.603-7.444 2.384a13.534 13.534 0 0 0-2.04 2.414 13.534 13.534 0 0 0-2.04-2.414c-1.911-1.781-4.787-3.297-7.444-2.384-2.566.882-3.773 3.943-4.197 6.41-.467 2.716.063 5.548 1.626 7.835.736 1.077 1.631 2.118 2.944 2.26l.17-3.003c-.574-.327-.904-1.193-1.127-1.731a7.075 7.075 0 0 1-.54-2.985c.123-2.996.967-4.605 2.09-5.119.743-.34 1.757.252 2.351.667.808.565 1.491 1.305 2.045 2.118 1.17 1.716 1.685 3.685 1.699 5.734-.117 1.571-1.062 33.132-1.062 33.132-3.015.254-6.067.933-8.963 2.226-2 .897-3.891 2.083-5.585 3.491a26.332 26.332 0 0 0-4.461 4.781c-2.542 3.512-4.173 7.462-5.215 11.431-1.036 3.983-1.492 8.025-1.53 12.043l-.04 4.173s11.066.166 14.428.457v-8.481a122.485 122.485 0 0 0-5.849-.289c.164-2.006.465-3.986.927-5.903.775-3.225 2.02-6.267 3.781-8.828 1.748-2.572 4.038-4.622 6.777-5.961 2.726-1.374 5.905-2.004 9.213-2.115l3.659-.123-.087-3.449s-1.033-35.016-1.15-36.586c.014-2.048.529-4.017 1.699-5.734.554-.813 1.237-1.553 2.045-2.118.593-.415 1.608-1.006 2.351-.667 1.123.514 1.967 2.123 2.09 5.119a7.075 7.075 0 0 1-.54 2.985c-.223.538-.553 1.404-1.127 1.731l.17 3.003c1.313-.142 2.208-1.183 2.944-2.26 1.565-2.286 2.095-5.118 1.629-7.834zm-4.601-10.86a9.151 9.151 0 0 1-.59 3.216 6.27 6.27 0 0 0-.674-.04c-2.108 0-4.461 1.067-6.458 2.927-.481.449-.935.936-1.357 1.458a14.265 14.265 0 0 0-1.358-1.458c-1.996-1.86-4.35-2.927-6.458-2.927-.296 0-.587.025-.875.065a9.148 9.148 0 0 1-.599-3.241C40.528 6.112 44.64 2 49.713 2s9.184 4.112 9.184 9.184zM48.086 6.77a2.083 2.083 0 1 0-4.166 0 2.083 2.083 0 0 0 4.166 0zm-1.691 21.017c-.02-1.953-.533-3.682-1.525-5.138-.526-.771-1.129-1.398-1.792-1.862a4.751 4.751 0 0 0-.703-.416L41.07 43.445h4.827c.175-5.458.424-14.633.498-15.658zm10.162-7c-.663.464-1.266 1.091-1.792 1.862-.993 1.456-1.505 3.185-1.524 5.138.074 1.027.314 10.059.491 15.658h4.835l-1.305-23.074a4.654 4.654 0 0 0-.705.416z"
        />
      </svg>
    );
  }
}

export default Sword;