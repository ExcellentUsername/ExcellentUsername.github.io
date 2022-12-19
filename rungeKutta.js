//The various variables needed for the runge kutta algorithm

var k1 = [[], [], []];
var k2 = [[], [], []];
var k3 = [[], [], []];
var k4 = [[], [], []];

var K1 = [[], [], []];
var K2 = [[], [], []];
var K3 = [[], [], []];
var K4 = [[], [], []];

// Function for calculating acceleration for each body i with each coordinate j.

function acceleration(i, j){ 

    if(i == 0){

        //r_12v stands for the vector between the masses 1 and 2 while r_12 stands for the distance between the masses 1 and 2. Same thing goes for the other variables

        let r_12v = r[1][j] - r[0][j]; 

        let r_12 = (((r[1][0] - r[0][0]) ** 2 + (r[1][1] - r[0][1])** 2)) ** 0.5;

        let r_13v = r[2][j] - r[0][j];

        let r_13 = (((r[2][0] - r[0][0]) ** 2 + (r[2][1] - r[0][1])** 2)) ** 0.5;

        a[i][j] = G * ( m[1] * (r_12v / r_12 ** 3) + m[2] * (r_13v / r_13 ** 3));

        return a[i][j];

    }

    else if(i == 1){

        let r_21v = r[0][j] - r[1][j];

        let r_21 = (((r[0][0] - r[1][0]) ** 2 + (r[0][1] - r[1][1])** 2)) ** 0.5;

        let r_23v = r[2][j] - r[1][j];

        let r_23 = (((r[2][0] - r[1][0]) ** 2 + (r[2][1] - r[1][1])** 2)) ** 0.5;

        a[i][j] = G * ( m[1] * (r_21v / r_21 ** 3) + m[2] * (r_23v / r_23 ** 3));
        
        return a[i][j];

    }

    else if(i == 2){

        let r_31v = r[0][j] - r[2][j];

        let r_31 = (((r[0][0] - r[2][0]) ** 2 + (r[0][1] - r[2][1])** 2)) ** 0.5;

        let r_32v = r[1][j] - r[1][j];

        let r_32 = (((r[1][0] - r[2][0]) ** 2 + (r[1][1] - r[2][1])** 2)) ** 0.5;

        a[i][j] = G * ( m[1] * (r_31v / r_31 ** 3) + m[2] * (r_32v / r_32 ** 3));

        return a[i][j];

    }

}

//The runge kutta algorithm, calculates variables of motion for each body i with each coordinate j.

function rungeKutta(){  

    for(let i = 0; i <= 2; i++){

        for(let j = 0; j <= 1; j++){

        //saving initial values for v_n & r_n
 
        let temp_r = r[i][j];

        let temp_v = v[i][j];
        
        //step 1

        k1[i][j] = v[i][j];

        K1[i][j] = acceleration(i,j);

        //step 2

        k2[i][j] = k1[i][j] + acceleration(i,j) * h/2;

        r[i][j] += v[i][j] * h/2;

        K2[i][j] = acceleration(i,j);

        //step 3 

        k3[i][j] = k2[i][j] + K2[i][j] * h/2;

        r[i][j] += k2[i][j] * h/2;

        K3[i][j] = acceleration(i,j);

        //step 4

        k4[i][j] = k3[i][j] + K3[i][j] * h/2;

        r[i][j] += k3[i][j] * h;

        K4[i][j] = acceleration(i,j);

        //Calculating the new variables of motion v_n+1 & r_n+1

        r[i][j] = temp_r + h/6 * (K1[i][j] + 2 * K2[i][j] + 2 * K3[i][j] + K4[i][j]);

        v[i][j] = temp_v + h/6 * (k1[i][j] + 2 * k2[i][j] + 2 * k3[i][j] + k4[i][j]);

        }

    }    

}