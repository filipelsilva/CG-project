class Collision{
    constructor(){}

    hasCollision(spaceship_font, garbage_font, h, c){
        var spaceship = spaceship_font.getSpaceship();
        var garbage = garbage_font.getGarbage();
        var r_A = h/2;
        
        var r_B = c;
        
        var r_sum = (r_A + r_B)**2;
        var c_A = spaceship.position.toArray();
        var c_Ax = c_A[0];
        var c_Ay = c_A[1];
        var c_Az = c_A[2];
        var items = garbage_font.getGarbageItems();

        for(var id = 0; id < garbage.children.length; id++){
            var current_item = items[id];
            var c_B = current_item.position.toArray();
            
            var c_Bx = c_B[0];
            var c_By = c_B[1];
            var c_Bz = c_B[2];

            var c_sum = (c_Ax - c_Bx)**2 + (c_Ay - c_By)**2 + (c_Az - c_Bz)**2
            
            if (r_sum >= c_sum){
                garbage.remove(current_item);
                break;
            }
        }
    }
}