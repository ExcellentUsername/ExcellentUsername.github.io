//temporary array for assigning input data

var temp = [[], [], []];

function createUserInput() {

    for (let i = 0; i <= 2; i++) {

        temp[i][-1] = createInput('m' + String(i + 1), ''); //Creates the boxes for mass

        temp[i][-1].position(30, 40 + 60 * i);

        for (let j = 0; j <= 1; j++) {

            temp[i][j] = createInput('r' + String(i + 1), ''); //Creates the boxes for start position

            temp[i][j].position(30 + 190 * j, 220 + 60 * i);

            temp[i][j+2] = createInput('v' + String(i + 1), ''); //Creates the boxes for start velocity

            temp[i][j+2].position(30 + 190 * j, 400 + 60 * i);

        }
    }
}

//Once function is called mass, position and velocity gets assigned with the input data. The input data becomes an int instead of a string with parseInt()

function updateInput() {

    for (let i = 0; i <= 2; i++) {

        m[i] = parseInt((temp[i][-1].value()));

        for (let j = 0; j <= 1; j++) {

            r[i][j] = parseInt((temp[i][j].value()));

            v[i][j] = parseInt((temp[i][j+2].value()));

        }
    }
}