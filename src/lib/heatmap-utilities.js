class HeatmapUtilities {
    static getColorFromFrequency(min, max, gradient, value) {
        const normalized = HeatmapUtilities.normalize(min, max, value);
        const denormalized = HeatmapUtilities.denormalize(0, gradient.length - 1, normalized);
        const colorIndex = Math.round(denormalized);
        return gradient[colorIndex];
    }

    // [min, x, max] -> [0, x', 1]
    static normalize(min, max, value) {
        const range = max - min;
        const offset = value - min;
        return offset / range;
    };

    // [0, x, 1] -> [min, x', max]
    static denormalize(min, max, value) {
        const range = max - min;
        const offset = value * range;
        return min + offset;
    };
}

const gradient = ['#66DDFF', '#66DFEE', '#66E1DD', '#66E3CC', '#66E6BB', '#66E8AA', '#66EA99', '#66EC88', '#66EF77', '#66F166', '#66F355', '#66F544', '#66F832', '#66FA21', '#66FC10', '#66FF00'];

export {
    HeatmapUtilities,
    gradient
};