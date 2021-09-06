ano_aniversario função , mes_aniversario, dia_aniversario) {
    var d = nova data,
        ano_atual = d. getFullYear(),
        mes_atual = d. getMonth() + 1,
        dia_atual = d. getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

     (mes_atual < mes_aniversario || mes_atual  ==  dia_aniversario mes_aniversario && < dia_atual ) {
        quantos_anos--;
    }

    voltar quantos_anos < 0? 0 : quantos_anos;
}



console. log(idade(2005, 28, 2)); // 33

console. log(idade(2011, 2, 15); // 2

console. log(idade(1993, 31, 5)); // 20