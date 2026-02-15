💸 Currency Converter - DevClub
Um conversor de moedas moderno e responsivo que realiza conversões em tempo real de Real (BRL) para as principais moedas do mercado: Dólar, Euro, Libra e Bitcoin.

🚀 Sobre o Projeto
Este projeto foi desenvolvido como parte da trilha de aprendizado do DevClub. O objetivo principal foi colocar em prática conceitos fundamentais de Front-end, criando uma interface funcional que manipula o DOM (Document Object Model) para atualizar valores, textos e imagens dinamicamente.

🛠️ Tecnologias Utilizadas
HTML5: Estruturação semântica de todo o conteúdo.

CSS3: Estilização personalizada, com foco em um card compacto e interativo.

JavaScript: Lógica de conversão, formatação internacional de moedas e manipulação de eventos.

Google Fonts: Utilização da fonte "Roboto" para melhor legibilidade.

🌟 Funcionalidades Principais
Conversão Dinâmica: O cálculo é realizado instantaneamente ao clicar no botão ou ao trocar a moeda no seletor.

Formatação Profissional: Uso da API Intl.NumberFormat para exibir símbolos e pontuações corretas de cada país.

Precisão em Cripto: Configuração especial para o Bitcoin, exibindo até 8 casas decimais para garantir clareza nos valores pequenos.

Interface Visual: Troca automática de bandeiras e nomes das moedas ao selecionar uma nova opção.

💻 Destaque do Código
Um dos maiores desafios foi garantir que o Bitcoin não fosse arredondado para zero. A solução foi o uso de minimumFractionDigits:

JavaScript
// Exemplo da lógica para Bitcoin
if (currencyselect.value === "bitcoin") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 8 
    }).format(inputvalue / bitcointoday);
}
🎨 Como visualizar
Clone este repositório.

Abra o arquivo index.html em seu navegador de preferência.

Digite o valor em Reais e veja a mágica acontecer!

## 👨‍💻 Autor

Desenvolvido por **Rubens Bandeira**
> Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/rubens-bandeira-2638b723/)