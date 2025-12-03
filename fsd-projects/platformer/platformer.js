$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(70, 700, 70, 80, "black");
createPlatform(250, 610, 200, 30, "red");
createPlatform(550,500,80,60,"white");
createPlatform(450,485,70,20)
createPlatform(580,439,80,60, "white");
createPlatform(610,380,80,60, "white");
createPlatform(300,350,80,20, "white");
createPlatform(700, 260, 200, 30, "red");
createPlatform(900, 200, 40, 20, "red");


    // TODO 3 - Create Collectables
createCollectable("steve", 250,250,);
createCollectable("steve", 100,500,);
createCollectable("steve", 300,675,);


    
    // TODO 4 - Create Cannons
createCannon("top" ,700, 1300);
createCannon("left" ,400, 3500)
createCannon("left" ,655, 3500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
