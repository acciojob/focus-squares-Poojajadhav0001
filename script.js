//your JS code here. If required.
 const squares = document.querySelectorAll(".square");

    squares.forEach((current) => {
      current.addEventListener("mouseover", () => {
        squares.forEach((sq) => {
          if (sq !== current) {
            sq.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee
          }
        });
      });

      current.addEventListener("mouseout", () => {
        squares.forEach((sq) => {
          sq.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender
        });
      
	  });
    });