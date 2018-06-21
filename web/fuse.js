const { FuseBox, WebIndexPlugin, CSSPlugin } = require('fuse-box');
const { src, task, context } = require('fuse-box/sparky');

// Context availible for all tasks
context(class {
  getConfig() {
    return FuseBox.init({
      homeDir: 'src',
      target: 'browser@es5',
      output: 'dist/$name.js',
      cache: true,
      sourceMaps: true,
      plugins: [
        WebIndexPlugin({
          template: 'public/index.html',
          title: 'Banner Armory'
        }),
        CSSPlugin()
      ]
    });
  }

  createBundle(fuse) {
    // Creates vendor libs bundle
    fuse.bundle('vendor').instructions('~ index.tsx');

    // Project files bundle
    const app = fuse.bundle('app');

    app.hmr();
    app.watch();

    app.instructions('> [index.tsx]');

    return app;
  }
});

// Removing dist directory
task('clean', () => src('dist').clean('dist').exec());

task('default', ['clean', 'copy'], async context => {
  const fuse = context.getConfig();

  fuse.dev({
    port: 5000
  });

  context.createBundle(fuse);

  await fuse.run();
});
