import * as React from 'react';

class Ring extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 50" width="36" height="50">
        <path
          fill="#ffdbac"
          d="M35.397 21.868c.229-.533.4-1.123.512-1.764.107-.662.084-1.366.045-1.853-.092-.989-.3-2.284-1.091-3.535a5.531 5.531 0 0 0-1.596-1.628 6.137 6.137 0 0 0-2.021-.858 8.317 8.317 0 0 0-1.83-.196c-.35 0-.707.021-1.092.061l3.089-3.414L22.068.062h-8.137L4.586 8.68l3.089 3.414c-.383-.04-.742-.061-1.092-.061-.639 0-1.237.064-1.842.199a6.118 6.118 0 0 0-2.005.853 5.54 5.54 0 0 0-1.602 1.635c-.789 1.247-.996 2.542-1.09 3.546-.037.474-.06 1.178.049 1.85.109.629.281 1.219.51 1.754a9.344 9.344 0 0 0 1.858 2.79l.004.004a17.392 17.392 0 0 0-1.884 8.123c.033 2.275.52 4.569 1.409 6.63a17.613 17.613 0 0 0 3.813 5.563 17.386 17.386 0 0 0 5.616 3.694 17.358 17.358 0 0 0 6.487 1.264h.14c4.491 0 8.916-1.81 12.137-4.965a17.434 17.434 0 0 0 3.822-5.555 17.542 17.542 0 0 0 1.414-6.634 17.635 17.635 0 0 0-1.24-6.699 17.196 17.196 0 0 0-.645-1.42l.001-.001a9.346 9.346 0 0 0 1.862-2.796zm-5.424-4.794c.122 0 .239.006.331.018.397.06.541.16.685.339.2.246.382.761.485 1.359.061.397.075.587.067.771a3.498 3.498 0 0 1-.155.785 4.64 4.64 0 0 1-.228.563 2.697 2.697 0 0 0-.499-1.794c-.329-.497-.744-.832-1.082-1.079a6.01 6.01 0 0 0-1.269-.687c.122-.034.242-.066.361-.095a5.62 5.62 0 0 1 1.304-.18zm-25.45 1.734c.106-.616.288-1.13.49-1.38.142-.176.286-.276.665-.333.11-.014.227-.021.349-.021.374 0 .826.062 1.305.18.119.029.239.061.361.095a6.135 6.135 0 0 0-1.282.696c-.325.237-.74.573-1.043 1.032a2.73 2.73 0 0 0-.526 1.831 4.675 4.675 0 0 1-.229-.565 3.457 3.457 0 0 1-.151-.743c-.012-.223.003-.412.061-.792zm21.982 22.486a12.078 12.078 0 0 1-3.876 2.663 12.268 12.268 0 0 1-4.623.931 12.056 12.056 0 0 1-8.502-3.606 11.884 11.884 0 0 1-3.368-8.496 11.768 11.768 0 0 1 1.442-5.46c.118.008.237.023.354.023.29 0 .58-.025.862-.074a4.406 4.406 0 0 0 1.983-.891c.65-.507 1.032-1.144 1.263-1.58.306-.581.463-1.152.578-1.641.058-.258.106-.524.146-.8a11.712 11.712 0 0 1 2.842-.976l.095.061 2.297 2.688 2.298-2.688.066-.042c.994.205 1.961.539 2.875.988.04.265.087.523.145.777.113.482.27 1.052.577 1.634.231.435.612 1.073 1.247 1.568a4.43 4.43 0 0 0 1.997.902c.283.049.573.074.863.074.115 0 .233-.015.349-.023a11.786 11.786 0 0 1 1.447 5.468 11.925 11.925 0 0 1-3.357 8.5z"
        />
        <path
          fill="#222222"
          d="M8.201 23.685c-.251 0-.573-.09-.909-.248a2.742 2.742 0 0 0 1.887-.491 1.865 1.865 0 0 1-.108.185c-.207.342-.46.526-.778.55-.03.002-.061.004-.092.004zm6.228-3.048c-.582-.361-1.148-.7-1.696-1.012.025.105.047.212.065.322.063.393.077.812.066 1.252.509-.221 1.031-.41 1.565-.562zm18.333 4.749a9.407 9.407 0 0 1-1.867 1.246c-.497.237-.97.411-1.429.53a12.796 12.796 0 0 1 1.407 5.61c.069 3.38-1.256 6.768-3.645 9.228a12.993 12.993 0 0 1-4.209 2.889 13.187 13.187 0 0 1-5.018 1.009c-3.447-.021-6.825-1.459-9.217-3.909-2.398-2.447-3.72-5.839-3.656-9.217A12.789 12.789 0 0 1 6.53 27.16a7.783 7.783 0 0 1-1.405-.519 9.441 9.441 0 0 1-1.879-1.251c-1.11 2.299-1.694 4.846-1.652 7.382a16.442 16.442 0 0 0 1.327 6.247 16.495 16.495 0 0 0 3.593 5.241 16.287 16.287 0 0 0 5.288 3.479c1.966.8 4.089 1.201 6.2 1.189 4.23.012 8.442-1.706 11.477-4.678a16.306 16.306 0 0 0 3.599-5.232 16.46 16.46 0 0 0 1.332-6.246 16.531 16.531 0 0 0-1.168-6.313c-.147-.364-.309-.72-.48-1.073zm-5.943-2.443c.029.056.059.109.091.158.226.371.479.555.771.577.056.005.087.007.118.007.25 0 .568-.088.908-.248a2.742 2.742 0 0 1-1.888-.494zm-3.617-2.992c.018-.111.04-.22.066-.326-.558.317-1.134.662-1.727 1.031.544.157 1.078.351 1.598.577a6.822 6.822 0 0 1 .063-1.282zM3.528 18.638c-.063.409-.092.683-.074 1.017.031.328.088.668.201 1.008.448 1.358 1.496 2.674 2.77 3.455.635.377 1.344.63 1.967.568.619-.046 1.161-.401 1.542-1.031.198-.303.341-.667.463-1.042.122-.383.218-.795.288-1.191.128-.783.133-1.626-.248-2.128-.357-.505-1.203-.594-1.973-.379-.127.032-.25.08-.375.124a1.738 1.738 0 0 1-.502 3.404c-.963 0-1.743-.78-1.743-1.743 0-.385.128-.737.34-1.025.225-.34.519-.59.823-.812.382-.27.798-.488 1.246-.642.446-.157.928-.257 1.444-.221.507.024 1.078.249 1.458.674.382.423.564.949.646 1.438.08.494.081.977.044 1.446-.042.471-.107.919-.211 1.38-.109.465-.246.937-.486 1.393-.238.45-.542.906-.99 1.255a3.383 3.383 0 0 1-1.535.692c-1.125.197-2.168-.122-3.065-.549a8.548 8.548 0 0 1-2.364-1.765 8.367 8.367 0 0 1-1.663-2.494 6.855 6.855 0 0 1-.443-1.527c-.087-.535-.073-1.139-.037-1.598.092-.983.284-2.054.937-3.086a4.546 4.546 0 0 1 1.305-1.332 5.147 5.147 0 0 1 1.68-.712c1.141-.254 2.2-.19 3.182-.044.2.032.396.069.592.107l5.467 6.042a46.899 46.899 0 0 0-2.183-1.234c-1.469-.772-2.987-1.453-4.457-1.813-.731-.18-1.446-.257-2.027-.18-.582.088-.98.28-1.319.701-.343.421-.574 1.103-.7 1.844zm31.421-.292c-.092-.983-.284-2.054-.937-3.086a4.546 4.546 0 0 0-1.305-1.332 5.147 5.147 0 0 0-1.68-.712c-1.141-.254-2.2-.19-3.182-.044-.2.032-.396.069-.592.107l-5.467 6.042a47.42 47.42 0 0 1 2.183-1.234c1.469-.772 2.987-1.453 4.457-1.813.731-.18 1.446-.257 2.027-.18.582.088.98.28 1.319.701.342.421.573 1.103.699 1.843.063.409.092.683.074 1.017a4.524 4.524 0 0 1-.201 1.008c-.448 1.358-1.496 2.674-2.77 3.455-.635.377-1.344.63-1.967.568-.619-.046-1.161-.401-1.542-1.031-.198-.303-.341-.667-.463-1.042a9.347 9.347 0 0 1-.288-1.191c-.128-.783-.133-1.626.248-2.128.357-.505 1.203-.594 1.973-.379.127.032.25.08.375.124a1.738 1.738 0 0 0 .502 3.404c.963 0 1.743-.78 1.743-1.743a1.72 1.72 0 0 0-.34-1.025c-.225-.34-.519-.59-.823-.812a4.936 4.936 0 0 0-1.246-.642c-.446-.155-.928-.255-1.444-.219-.507.024-1.078.249-1.458.674-.382.423-.564.949-.646 1.438-.08.494-.081.977-.044 1.446.042.471.107.919.211 1.38.109.465.246.937.486 1.393.238.45.542.906.99 1.255.437.354.982.597 1.535.692 1.125.197 2.168-.122 3.065-.549a8.548 8.548 0 0 0 2.364-1.765 8.367 8.367 0 0 0 1.663-2.494c.204-.476.35-.991.443-1.527.087-.537.074-1.141.038-1.599zM18 21.403l4.662-10.007h-9.325L18 21.403zm0-20.001l4.632 8.984h-9.264L18 1.402zm5.346 8.918l-1.333-8.935 7.762 7.158-6.429 1.777zm-5.174-9.249h3.284l1.257 8.428-4.541-8.428zm-3.628 0h3.284L13.287 9.5l1.257-8.429zM6.006 8.744zm23.988 0zM6.225 8.543l7.762-7.158-1.333 8.935-6.429-1.777zm23.412.595L18.574 21.367l4.645-9.971h.043l.066-.023 6.309-2.235zm-23.274 0l6.309 2.234.066.023h.043l4.645 9.97L6.363 9.138z"
        />
      </svg>
    );
  }
}

export default Ring;
