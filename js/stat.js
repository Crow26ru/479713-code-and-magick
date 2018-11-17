'use strict';

var renderCloud = function(ctx, color, figure) {
  ctx.beginPath();
  ctx.moveTo(figure.startPosition.x, figure.startPosition.y);
  
  for(var i = 0; i < figure.points.length; i++) {
    ctx.lineTo(figure.points[i].x, figure.points[i].y);
  }
  
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

window.renderStatistics = function(ctx) {
  var cloud = {
    startPosition: {x: 100, y: 50},
    points: [
      {x: 500, y: 50},
      {x: 550, y: 125},
      {x: 500, y: 200},
      {x: 100, y: 200},
      {x: 50, y: 125},
      {x: 100, y: 50}
    ]
  };
  var shadowCloud = {
    startPosition: {x: 110, y: 60},
    points: [
      {x: 510, y: 60},
      {x: 560, y: 135},
      {x: 510, y: 210},
      {x: 110, y: 210},
      {x: 60, y: 135},
      {x: 110, y: 60}
    ]
  };
  
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', shadowCloud);
  renderCloud(ctx, '#ffffff', cloud);
};