# Banco do Itau

Este projeto contém três componentes principais da interface do Banco do Brasil: `SectionHero`, `Header` e `SectionService`. Cada componente é responsável por uma parte específica da página, desde a introdução até os serviços oferecidos.

## SectionHero

### Descrição
A seção heroica do site apresenta uma breve descrição sobre o aplicativo do banco, destacando a facilidade de uso e os links para download na Apple Store e Google Play.

### Componentes Importados
- **ImageAppleStore**: Imagem do botão para download na Apple Store.
- **ImageGooglePlay**: Imagem do botão para download na Google Play.
- **Arrow**: Ícone de seta para explorar mais conteúdo na página.
- **WomanImage**: Imagem ilustrativa de uma mulher.

### Função
- **handleScroll**: Ao clicar no botão "Continue explorando", o site rola suavemente até a seção de serviços.

### Estrutura
1. **Título**: "Tenha seu Banco na palma da mão"
2. **Parágrafo**: Descreve a facilidade e a completude do app.
3. **Botões**: Links para Apple Store e Google Play.
4. **Botão Explorer**: Permite ao usuário continuar navegando pela página.
5. **Imagem**: Ilustração da mulher à direita.

--------------------------------------------------------------------------
## Header

### Descrição
A barra de navegação principal contém o logo do Banco do Brasil, links de navegação e um botão de acesso à conta.

### Componentes Importados
- **LogoItau**: Imagem do logo do banco.
- **IconUser**: Ícone de usuário ao lado do botão "Acessar Conta".

### Estrutura
1. **Logo**: Exibido à esquerda.
2. **Itens do Menu**: "Para você", "Para empresas", "Serviços", "Ajuda".
3. **Botão de Acesso**: Exibe o ícone de usuário e texto "Acessar Conta".

------------------------------------------------------------------------------

## SectionService

### Descrição
Esta seção apresenta os serviços disponíveis no app, com detalhes sobre o gerenciamento de finanças e soluções oferecidas.

### Componentes Importados
- **PhoneIcon, SoluctionIcon, OptionIcon, CardIcon**: Ícones para cada serviço.
- **ImagePhone**: Imagem de um celular ilustrando a seção.

### Estrutura
1. Título: "Gerencie suas finanças sem sair de casa"
2. Lista de Serviços:
3. Acompanhar conta
4. Soluções de empréstimos
5. Opções de investimentos
6. Fatura do cartão de crédito

-----------------------------------------------------------------------------------

## Conclusão
O projeto do Banco do Brasil, que abrange os componentes SectionHero, Header e SectionService, oferece uma interface visual organizada e funcional, focada em fornecer aos usuários uma experiência fluida e intuitiva. O SectionHero destaca a facilidade de acesso ao aplicativo do banco, incentivando o download pelas principais plataformas e apresentando os principais benefícios do serviço. O Header proporciona uma navegação clara e simples, garantindo que o usuário possa acessar rapidamente as principais seções e funcionalidades, como a área de login. Já o SectionService foca em expor os serviços oferecidos pelo Banco do Brasil, destacando soluções financeiras acessíveis via aplicativo, permitindo que o usuário gerencie suas finanças de forma prática e segura.

Essa estrutura proporciona uma navegação fluida e agradável, com foco na experiência do usuário, ressaltando a importância de oferecer serviços digitais que unam praticidade e segurança. O uso de imagens e ícones complementa a interface, tornando-a moderna e acessível. Em resumo, a implementação desses componentes é essencial para transmitir a proposta de valor do Banco do Brasil, alinhando tecnologia e atendimento eficiente.
