const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  it('Argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Argumento popularity deve retornar um numero igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
//   it('Se o argumento passado for uma string vazia, a função deve retornar null', () => {
//     expect(handlerElephants('')).toBeNull();
//   });
});
