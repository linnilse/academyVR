// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Surface,
  VideoModule,
  staticResourceURL,
} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  console.log(r360);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('academyVR_1', { /**/ }),
    r360.getDefaultSurface()
  );

  const leftPanel = new Surface(300, 500, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-1, 0);


  r360.renderToSurface(
    r360.createRoot('Menu'),
    leftPanel,
  );

  // Creating a Video Player
  const player = r360.compositor.createVideoPlayer('myplayer');
  console.log(player.setSource);
  player.setSource(r360.getAssetURL('video.mp4'), false, 'mp4');

  //player.play();
  //r360.compositor.setBackgroundVideo('myplayer');
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  //r360.start();
}



window.React360 = { init };