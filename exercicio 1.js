#incluir <stdio. h>
#incluir <stdlib. h>

int principal() {
    int opcao, num1, num2;

    fazer {
        printf("\n1 - Soma\n2 - Subtracao\n3 - Multiplicacao\n4 - Divisao\n0 - Sair\n\n");
        scanf("%d", &opcao);

        se(opcao > 0 && opcao < 5){
            printf("Digite dois valores: ");
            scanf("%d%d",&num1, &num2);
        }

        switch(opcao) {
        caso 0:
            printf("Saindo...\n");
            quebrar;
        caso 1:
            printf("Soma: %d\n", num1 + num2);
            quebrar;
        caso 2:
            printf("Subtracao: %d\n", num1 - num2);
            quebrar;
        caso 3:
            printf("Multiplicacao: %d\n", num1 * num2);
            quebrar;
        caso 4:
            enquanto(num2 == 0 ) {
                printf("Nao existe divisao por zero!\nDigite outro valor: ");
                scanf("%d", &num2);
            }
            printf("Divisao: %d\n", num1 / num2);
            quebrar;
        padrão:
            printf("Opcao inválida.\nDigite outra opcao: ");
        }
    } enquanto(opcao != 0 );
}