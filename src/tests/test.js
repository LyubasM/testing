import health from '../health.js';
test.each([
    [{name: "Чебурашка", health: 51}, 'healthy'],
    [{name: "Геннадий крокодил", health: 50}, 'wounded'],
    [{name: "Внезапный Георгий", health: 8}, 'critical']
])('checking health level', (character, expected) => {
    const result = health(character);
    expect(result).toBe(expected);
})

