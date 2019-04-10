// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Surface,
  VideoModule,
  staticResourceURL,
} from 'react-360-web';
import KeyboardModule from 'react-360-keyboard/KeyboardModule';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [KeyboardModule.addModule],
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

  //Floormenu
  const FloorPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  FloorPanel.setAngle(1.3, 0);

  r360.renderToSurface(
    r360.createRoot('FloorMenu'),
    FloorPanel,
  );

  //sentimental analysis
  const sentimentPanel = new Surface(500, 270, Surface.SurfaceShape.Flat);
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

  //hallway i rum 1
  const HallwayPanel = new Surface(1000, 1000, Surface.SurfaceShape.Flat);
  HallwayPanel.setAngle(-1.1, 0);

  r360.renderToSurface(
    r360.createRoot('Hallway'),
    HallwayPanel,
  );

  //videoWall
  const videoWallPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  videoWallPanel.setAngle(-3, 0);

  r360.renderToSurface(
    r360.createRoot('VideoWall'),
    videoWallPanel,
  );

  //VideoIntro 
  const IntroPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  IntroPanel.setAngle(2.2, 0);

  r360.renderToSurface(
    r360.createRoot('VideoIntro'),
    IntroPanel,
  );

  //PingisWall
  const PingisWallPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  PingisWallPanel.setAngle(-3.1, 0);

  r360.renderToSurface(
    r360.createRoot('PingisWall'),
    PingisWallPanel,
  );
  //pluggWall
  const PluggWallPanel = new Surface(1000, 1000, Surface.SurfaceShape.Flat);
  PluggWallPanel.setAngle(2, 0);

  r360.renderToSurface(
    r360.createRoot('PluggWall'),
    PluggWallPanel,
  );

  //Instagram
  const InstagramPanel = new Surface(1000, 1000, Surface.SurfaceShape.Flat);
  InstagramPanel.setAngle(-2.1, 0);

  r360.renderToSurface(
    r360.createRoot('Instagram'),
    InstagramPanel,
  );

  // Intro
  r360.renderToSurface(
    r360.createRoot('academyVR_1', { /**/ }),
    r360.getDefaultSurface()
  );

  // 360 videoplayer
  const player = r360.compositor.createVideoPlayer('myplayer');
  console.log(player.setSource);
  player.setSource(r360.getAssetURL('VR-vid_1.mp4'), false, 'mp4');

  // 360 videoplayer Kitchen
  const player2 = r360.compositor.createVideoPlayer('myplayer2');
  console.log(player2.setSource);
  player2.setSource(r360.getAssetURL('Kitchen.mp4'), false, 'mp4');


  //default background
  r360.compositor.setBackground(r360.getAssetURL('academy.jpg'));
  KeyboardModule.setInstance(r360);
}

window.React360 = { init };