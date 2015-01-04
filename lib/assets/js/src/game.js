Game = {
  map_grid: {
    width:  640,
    height: 640,
    tile: {
      width:  32,
      height: 32
    }
  },
 
  // The total width of the game screen. Since our grid takes up the entire screen
  //  this is just the width of a tile times the width of the grid
  width: function() {
    return this.map_grid.width * this.map_grid.tile.width;
  },
 
  // The total height of the game screen. Since our grid takes up the entire screen
  //  this is just the height of a tile times the height of the grid
  height: function() {
    return this.map_grid.height * this.map_grid.tile.height;
  },
 
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(Game.width(), Game.height());
    var TiledMapBuilder = Crafty.e("2D, DOM, TiledMapBuilder")

    TiledMapBuilder.setMapDataSource(world);

    TiledMapBuilder.createWorld(function(w) {
    });

    Crafty.load(['assets/images/world1_1.json'], function(){

    // Once the image is loaded...
 
    // Define the individual sprites in the image
    // Each one (spr_tree, etc.) becomes a component
    // These components' names are prefixed with "spr_"
    //  to remind us that they simply cause the entity
    //  to be drawn with a certain sprite
    // Crafty.sprite(16, 'assets/16x16_forest_1.gif', {
    //   spr_tree:    [0, 0],
    //   spr_bush:    [1, 0],
    //   spr_village: [0, 1],
    //   spr_player:  [1, 1]
    // });
 
    // Now that our sprites are ready to draw, start the game
    // Crafty.scene('Game');
  })
  }
}
