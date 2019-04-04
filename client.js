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

  //menu
  const menuPanel = new Surface(300, 500, Surface.SurfaceShape.Flat);
  menuPanel.setAngle(0.6, 0);

  r360.renderToSurface(
    r360.createRoot('Menu'),
    menuPanel,
  );

  //sentimental analysis
  const sentimentPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  sentimentPanel.setAngle(-1.5, 0);

  r360.renderToSurface(
    r360.createRoot('Sentiment'),
    sentimentPanel,
  );

  //kaffe i rum 1
  const KaffePanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  KaffePanel.setAngle(-2.6, 0);

  r360.renderToSurface(
    r360.createRoot('KaffeWall'),
    KaffePanel,
  );

  //videoWall
  const videoWallPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  videoWallPanel.setAngle(-3, 0);

  r360.renderToSurface(
    r360.createRoot('VideoWall'),
    videoWallPanel,
  );

  //PingisWall
  const PingisWallPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  PingisWallPanel.setAngle(-3.1, 0);

  r360.renderToSurface(
    r360.createRoot('PingisWall'),
    PingisWallPanel,
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('academyVR_1', { /**/ }),
    r360.getDefaultSurface()
  );



  // Creating a Video Player
  const player = r360.compositor.createVideoPlayer('myplayer');
  console.log(player.setSource);
  player.setSource(r360.getAssetURL('VR-vid_1.mp4'), false, 'mp4');

  //player.play();
  //r360.compositor.setBackgroundVideo('myplayer');
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('academy2.jpg'));
  //r360.start();
}



window.React360 = { init };