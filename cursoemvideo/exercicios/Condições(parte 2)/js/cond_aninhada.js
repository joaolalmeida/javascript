var idade = 66
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {  // && significa 'e'  
        console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}