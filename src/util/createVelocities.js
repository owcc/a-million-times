const createVelocities = (columns, rows, value1 = 0.0, value2 = 0.0) => {
    const values = new Float32Array(columns * rows * 2);
    let index = 0;
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            values[index] = value1;
            values[index + 1] = value2;
            index += 2;
        }
    }
    return values;
};

export default createVelocities;
