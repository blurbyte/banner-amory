const { FuseBox, WebIndexPlugin, CSSPlugin, EnvPlugin } = require('fuse-box');
const { src, task, context } = require('fuse-box/sparky');
const express = require('express');
const path = require('path');

// context availible for all tasks
context(
  class {
    getConfig() {
      return FuseBox.init({
        homeDir: 'src',
        target: 'browser@es5',
        output: 'dist/$name.js',
        cache: true,
        sourceMaps: true,
        alias: {
          '@styles': '~/styles',
          '@sharedTypes': '~/types'
        },
        plugins: [
          EnvPlugin({
            GRAPHQL_API_URL: 'http://localhost:4000',
            STORAGE_URL: 'https://eloriel.blob.core.windows.net/banner-armory/'
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
      const app = fuse
        .bundle('app')
        .instructions('> [index.tsx]')
        .hmr()
        .watch();

      return app;
    }

    startCustomDevServer(fuse) {
      fuse.dev({ port: 5000, root: false }, server => {
        const dist = path.resolve('./dist');
        const app = server.httpServer.app;

        app.use('/', express.static(dist));
        app.get('*', function(_req, res) {
          res.sendFile(path.join(dist, 'index.html'));
        });
      });
    }
  }
);

// removes dist directory
task('clean', () => src('dist').clean('dist').exec());

// moves content of public directory to dist
task('copy', () => src('**/**.**', { base: 'public' }).dest('dist').exec());

// tasks
task('default', ['clean', 'copy'], async context => {
  const fuse = context.getConfig();

  context.startCustomDevServer(fuse);

  context.createBundle(fuse);

  await fuse.run();
});
