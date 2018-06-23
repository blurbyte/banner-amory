const { FuseBox, WebIndexPlugin, CSSPlugin, EnvPlugin } = require('fuse-box');
const { src, task, context } = require('fuse-box/sparky');

// context availible for all tasks
context(class {
  getConfig() {
    return FuseBox.init({
      homeDir: 'src',
      target: 'browser@es5',
      output: 'dist/$name.js',
      cache: true,
      sourceMaps: true,
      plugins: [
        EnvPlugin({
          GRAPHQL_API_URL: 'http://localhost:4000'
        }),
        WebIndexPlugin({
          template: 'public/index.html',
          title: 'Banner Armory'
        }),
        CSSPlugin()
      ]
    });
  }

  createBundle(fuse) {
    // creates vendor libs bundle
    fuse.bundle('vendor').instructions('~ index.tsx');

    // project files bundle
    const app = fuse.bundle('app');

    app.hmr();
    app.watch();

    app.instructions('> [index.tsx]');

    return app;
  }
});

// removes dist directory
task('clean', () => src('dist').clean('dist').exec());

// moves content of public directory to dist
task('copy', () => src('**/**.**', { base: 'public' }).dest('dist').exec());

task('default', ['clean', 'copy'], async context => {
  const fuse = context.getConfig();

  fuse.dev({
    port: 5000
  });

  context.createBundle(fuse);

  await fuse.run();
});
