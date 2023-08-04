const conta = {
    id: '1',
    email: 'miguel@bank',
    password: '123456',
    name: 'Miguel Faria',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})