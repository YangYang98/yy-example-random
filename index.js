function random(min, max) {
    print("random");
    return Math.round(Math.random() * (max - min + 1)) + min;
}

module.exports = random;