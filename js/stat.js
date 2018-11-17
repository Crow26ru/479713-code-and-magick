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

var getMaxResult = function(player) {
  if(player.length == 1) {
    return player[0];
  }

  var maxResult = player[0];

  for(var i = 1; i < player.length; i++) {
    if(maxResult < player[i]) {
      maxResult = player[i];
    }
  }

  return maxResult;
};

window.renderStatistics = function(ctx, names, times) {
  var cloud = {
    startPosition: {x: 100, y: 10},
    points: [
      {x: 310, y: 20},
      {x: 520, y: 10},
      {x: 510, y: 145},
      {x: 520, y: 280},
      {x: 310, y: 270},
      {x: 100, y: 280},
      {x: 110, y: 145},
      {x: 100, y: 10}
    ]
  };
  var shadowCloud = {
    startPosition: {x: 110, y: 20},
    points: [
      {x: 320, y: 30},
      {x: 530, y: 20},
      {x: 520, y: 155},
      {x: 530, y: 290},
      {x: 320, y: 280},
      {x: 110, y: 290},
      {x: 120, y: 155},
      {x: 120, y: 20}
    ]
  };
  
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', shadowCloud);
  renderCloud(ctx, '#ffffff', cloud);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили', 150, 24);
  ctx.fillText('Список результатов:', 150, 48);
};