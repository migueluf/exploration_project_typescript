import { login } from './login'

describe ('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'miguel@bank'

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        await login(mockEmail)
        login('miguel@dio.me')
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo miguel@dio.me!')
    })

    it('deve exibir um erro caso o email seja invalido', async () => {
        await login('email@email')
        expect(mockAlert).toHaveBeenLastCalledWith('Email inválido')
    })

})