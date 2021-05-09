function isTouching (A, B) {if (A.x - B.x <= A.width/2 + B.width/2 && 
    B.x - A.x <= A.width/2 + B.width/2 &&
    A.y - B.y <= A.height/2 + B.height/2 &&
    B.y - A.y <= A.height/2 + B.height/2) {
        B.velocityX = 0;
        A.velocityX = 0;
  } else {
      B.velocityX = -3
      A.velocityX = 0;
  }}