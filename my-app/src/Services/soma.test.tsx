import { soma, multiplica } from './soma'

describe('soma', () => {
    it('deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('Deve multiplicar o número por 3', () =>{
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })
})
