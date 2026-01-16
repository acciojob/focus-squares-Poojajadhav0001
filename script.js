//your JS code here. If required.
 const squares = document.querySelectorAll(".square");

    squares.forEach((current) => {
      current.addEventListener("mouseenter", () => {
        squares.forEach((sq) => {
          if (sq !== current) {
            sq.style.backgroundColor = "#6F4E37"; // Coffee
          }
        });
      });

      current.addEventListener("mouseleave", () => {
        squares.forEach((sq) => {
          sq.style.backgroundColor = "#E6E6FA"; // Lavender
        });
      });
    });