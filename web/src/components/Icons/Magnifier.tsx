import * as React from 'react';

class Magnifier extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 50">
        <path
          fill="#FFDBAC"
          d="M16.814 49.929v-4.04h1.01c.976 0 1.132-.235 1.132-.989v-9.084c0-.855.787-1.219 1.515-1.391v-2.034H4.436l-1.92-4.779s.429-.346.898-.864c.184-.203.335-.426.517-.685.301-.44.603-.946.89-1.496.52-1.014.963-2.165 1.314-3.414.135-.47.245-.95.355-1.466a3.124 3.124 0 0 1-1.551.432l-.103-.002c-.631-.021-1.238-.201-1.852-.549-.901-.527-1.623-1.292-2.155-2.28a5.921 5.921 0 0 1-.684-3.066 6.196 6.196 0 0 1 .957-2.97A7.943 7.943 0 0 1 3.05 9.13a5.87 5.87 0 0 1 1.531-.817 4.631 4.631 0 0 1 1.433-.234c.23 0 .458.018.679.055a4.528 4.528 0 0 1 1.892.784C11.324 3.499 16.833.072 22.996.072h18.568l1.92 4.779-.544.471-.04.04c-.023.024-.051.05-.079.083-.095.101-.164.184-.234.268-.174.212-.335.426-.517.685-.301.44-.603.946-.89 1.496a18.448 18.448 0 0 0-1.314 3.414c-.135.47-.245.95-.355 1.466a3.124 3.124 0 0 1 1.551-.432l.103.002c.631.021 1.238.201 1.852.549.901.527 1.623 1.292 2.155 2.28.506.968.741 2.024.684 3.066a6.196 6.196 0 0 1-.957 2.97 7.985 7.985 0 0 1-1.948 2.121 5.87 5.87 0 0 1-1.531.817 4.631 4.631 0 0 1-1.433.234 4.12 4.12 0 0 1-.679-.055 4.536 4.536 0 0 1-1.898-.789 16.079 16.079 0 0 1-11.888 8.654v2.231c.728.172 1.515.536 1.515 1.391V44.9c0 .754.156.989 1.132.989h1.01v4.04H16.814zm22.414-32.783c.046.428.117.834.214 1.217.122.493.3.94.503 1.265.113.174.201.264.237.297.055-.017.168-.061.32-.153.326-.206.693-.549.942-.887.372-.49.506-1.057.396-1.613a2.503 2.503 0 0 1-2.612-.126zM5.36 14.883c.523 0 1.009.16 1.412.433a8.779 8.779 0 0 0-.214-1.217c-.122-.493-.3-.94-.503-1.265a1.57 1.57 0 0 0-.237-.297 1.525 1.525 0 0 0-.32.153 3.775 3.775 0 0 0-.942.887c-.372.49-.506 1.057-.396 1.613a2.51 2.51 0 0 1 1.2-.307z"
        />
        <path d="M28.168 46.899v2.02H17.824v-2.02c1.263 0 2.142-.442 2.142-1.999v-8.575c.569.176 1.55.248 3.082.248 1.455 0 2.414-.077 2.978-.256V44.9c0 1.557.88 1.999 2.142 1.999zm6.245-31.809a22.419 22.419 0 0 1 .868-7.712 15.118 15.118 0 0 0-1.482-1.752h-9.08c5.113.829 9.033 5.262 9.033 10.605 0 1.949-.529 3.773-1.439 5.352l.022-.025c-2.004 3.693-5.271 5.784-9.598 5.784H8.753c1.558-3.866 2.18-7.781 2.099-10.046-.05-1.264-.223-2.526-.573-3.735-.342-1.176-.864-2.309-1.639-3.244a4.432 4.432 0 0 0-.612-.554 3.537 3.537 0 0 0-1.499-.633 3.466 3.466 0 0 0-1.616.136 4.81 4.81 0 0 0-1.251.667 6.995 6.995 0 0 0-1.708 1.859 5.165 5.165 0 0 0-.801 2.484c-.049.89.167 1.771.565 2.532.408.757.979 1.421 1.764 1.881.394.224.855.4 1.391.419.45.017.943-.15 1.318-.435a1.515 1.515 0 0 0-.833-2.779c-.653 0-1.205.416-1.418.995a3.208 3.208 0 0 1-.578-.884c-.444-1.029-.286-2.151.38-3.028a4.824 4.824 0 0 1 1.231-1.151c.223-.135.441-.231.632-.281a.985.985 0 0 1 .474.005c.133.038.264.11.409.232.143.128.288.308.422.515.267.428.482.971.626 1.554.294 1.169.359 2.463.271 3.739-.046.64-.126 1.279-.249 1.912a26.311 26.311 0 0 1-.453 1.922 19.349 19.349 0 0 1-1.391 3.609 15.467 15.467 0 0 1-.958 1.608c-.175.25-.355.493-.54.718-.093.111-.319.352-.496.543l1.397 3.477h16.362v3.902c-.881.104-1.479.295-1.509.515.269.118 1.013.27 3.076.27 1.983 0 2.705-.16 2.97-.277-.042-.217-.635-.406-1.507-.508v-3.978c5.523-.548 10.162-4.068 12.324-8.933-.817-.976-1.36-2.141-1.732-3.333-.394-1.282-.602-2.613-.688-3.947zm9.869.564c-.408-.757-.979-1.421-1.764-1.881a3.005 3.005 0 0 0-1.391-.419c-.45-.017-.943.15-1.318.435a1.515 1.515 0 0 0 .833 2.779c.653 0 1.205-.416 1.418-.995.235.256.438.56.578.884.444 1.029.286 2.151-.38 3.028a4.824 4.824 0 0 1-1.231 1.151 2.466 2.466 0 0 1-.632.281.985.985 0 0 1-.474-.005 1.103 1.103 0 0 1-.409-.232 2.592 2.592 0 0 1-.422-.515c-.267-.428-.482-.971-.626-1.554-.294-1.169-.359-2.463-.271-3.739.046-.64.126-1.279.249-1.912.134-.645.272-1.293.453-1.922.354-1.261.811-2.48 1.391-3.609.293-.562.613-1.102.958-1.608A8.47 8.47 0 0 1 42.28 4.56l-1.397-3.477H22.998c-6.194 0-11.506 3.724-13.855 9.049.802.953 1.361 2.079 1.742 3.244.409 1.259.63 2.568.726 3.879a21.485 21.485 0 0 1-.897 7.818l-.015-.005c.453.629.954 1.219 1.496 1.771h9.081c-5.113-.829-9.033-5.262-9.033-10.605 0-1.957.635-4.044 1.415-5.329 1.887-3.112 5.274-5.781 9.601-5.781h13.992c-1.353 2.099-2.137 7.706-2.077 9.933.041 1.286.201 2.572.539 3.808.3 1.087.758 2.135 1.421 3.031.239.286.508.564.841.808.419.301.939.543 1.5.631a3.466 3.466 0 0 0 1.616-.136 4.81 4.81 0 0 0 1.251-.667 6.995 6.995 0 0 0 1.708-1.859 5.165 5.165 0 0 0 .801-2.484 4.985 4.985 0 0 0-.569-2.535zM22.996 25.785c-5.338 0-9.68-4.343-9.68-9.68s4.343-9.68 9.68-9.68c5.338 0 9.68 4.343 9.68 9.68s-4.342 9.68-9.68 9.68zm-2.347-13.248a2.462 2.462 0 1 0-4.923 0 2.462 2.462 0 0 0 4.923 0z" />
      </svg>
    );
  }
}

export default Magnifier;