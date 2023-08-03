// 1 - var, let e const 

// VAR
console.debug('-------------')
console.debug('VAR')
var x_fora = 5;
var y_fora = 10;
console.debug('console antes do bloco if')
console.debug('valor antes do if: ', x_fora);
if (y_fora > 5) {
    var x_dentro = 6
    console.debug('console dentro do bloco if')
    console.debug('Valor da variavel declarada fora do if', x_fora)
    console.debug('Valor da variavel declarada dentro do if', x_dentro)
    x_fora = 10
    console.debug('Valor da variavel declarada fora do if recebendo novo valor dentro do if', x_fora)

    console.debug('name222', name222, typeof(name222));
    var name222 = 'Gustavo'
}
console.debug('console depois do bloco if')
console.debug('Valor da variavel declarada fora do if', x_fora)
console.debug('Valor da variavel declarada dentro do if', x_dentro)


// LET
console.debug('-------------')
// console.log('name2',name2);
console.debug('LET')
let xx_fora = 5;
let yy_fora = 10;
console.debug('console antes do bloco if')
console.debug('valor antes do if: ', xx_fora);
if (yy_fora > 5) {
    let xx_dentro = 6
    console.debug('console dentro do bloco if')
    console.debug('Valor da variavel declarada fora do if', xx_fora)
    console.debug('Valor da variavel declarada dentro do if', xx_dentro)
    xx_fora = 20;
    console.debug('Valor da variavel declarada fora do if recebendo novo valor dentro do if', xx_fora)
   
    let name11 = 'Gustavo'
    console.debug('name222', name11, typeof(name11));
}
console.debug('console depois do bloco if')
console.debug('Valor da variavel declarada fora do if', xx_fora)
// console.debug('Valor da variavel declarada dentro do if', xx_dentro) // ERRO pois foi declarado dentro do bloco


// CONST
console.debug('-------------')
console.debug('CONST')
const xxx_fora = 5;
const yyy_fora = 10;
console.debug('console antes do bloco if')
console.debug('valor antes do if: ', xxx_fora);
if (yyy_fora > 5) {
    const xxx_dentro = 6
    console.debug('console dentro do bloco if')
    console.debug('Valor da variavel declarada fora do if', xxx_fora)
    console.debug('Valor da variavel declarada dentro do if', xxx_dentro)

    // xxx_fora = 30; retorna um ERRO, pois a constante não pode receber um novo valor 
    // console.debug('Valor da variavel declarada fora do if recebendo novo valor dentro do if', xxx_fora)

    const name3 = 'gustavo3'
    console.debug('name', name3);
}
console.debug('console depois do bloco if')
console.debug('Valor da variavel declarada fora do if', xxx_fora)
// console.debug('Valor da variavel declarada dentro do if', xxx_dentro) // ERRO pois foi declarado dentro do bloco

/*
Resultados obitidos
- LET e CONST são variaveis de escopo, a const não pode ser atribuido um novo valor, já o let pode.
- VAR pode usar de forma geral, se atribuirmos dentro de um bloco, podemos acessar de fora e até mesmo acessar ele antes de 
  ser declarado não vai nos trazer um erro mas retornara undefined, confome nos testes acima
- Não conseguimos acessar const e let antes de ser declarado, retorna erro
- CONST E LET não possibilitar redeclarar
*/

