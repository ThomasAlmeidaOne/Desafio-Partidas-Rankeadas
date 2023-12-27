function calcularNivel(quantVitorias, quantDerrotas){
    const saldoVitorias = (quantVitorias - quantDerrotas)

    let nivel

     if(saldoVitorias <= 10 ){
        nivel = "Ferro 🔨"

     }else if( saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze 🥉"

      }else if( saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata 🥈"

      }else if( saldoVitorias >= 50 && saldoVitorias <= 80){
        nivel = "Ouro 🥇"

      }else if( saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante 💎"

      }else if( saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = "Lendário 🏆"

      }else{
        nivel = "Imortal 🌟"
      }
      console.log("O Herói tem um saldo de "+ saldoVitorias + " vitorias e está no nível de "+ nivel);
}
//#Exemplo de uso
calcularNivel(30,0);