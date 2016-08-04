/**
 * Created by danny.p on 2016. 8. 4..
 */
var ENEMY_FREQ = 1500;
var Enemies = Rx.Observable.interval(ENEMY_FREQ)
  .scan(function(enemyArray) { var enemy = {
    x: parseInt(Math.random() * canvas.width),
    y: -30, };
    enemyArray.push(enemy);
    return enemyArray; }, []);
var Game = Rx.Observable .combineLatest(
  StarStream, SpaceShip, Enemies, function(stars, spaceship, enemies) {
    return {
      stars: stars, spaceship: spaceship, enemies: enemies
    }; });
