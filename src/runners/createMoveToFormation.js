import normalize from '../util/normalize';

export default formation => {
    let vacc = null;
    return (x, y, index, value1, value2, v1, v2, t) => {
        if (x === 0 && y === 0) {
            if (vacc === 0 && t > 2000) return;
            else vacc = 0;
        }

        const to1 = formation[index];
        const to2 = formation[index + 1];

        let d1 = normalize(to1 - value1);
        let d2 = normalize(to2 - value2);

        if (d1 < 0) d1 = 1 + d1;
        if (d2 < 0) d2 = 1 + d2;

        if (Math.abs(d1) > 0.001) {
            v1 = d1 / 100 * (t / 2000);
        } else {
            v1 = 0;
        }

        if (Math.abs(d2) > 0.001) {
            v2 = d2 / 100 * (t / 2000);
        } else {
            v2 = 0;
        }

        vacc += v1 + v2;
        return [v1, v2];
    };
};
