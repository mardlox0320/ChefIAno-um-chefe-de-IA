# ChefIAno
O ChefIAno é um assistente culinário inteligente desenvolvido para criar receitas personalizadas a partir dos ingredientes que você tem em casa, alimentado pela Google Gemini API, a aplicação interpreta inputs variados, formata receitas completas e lida com casos de borda de maneira interativa e bem-humorada

# Como Usar
Informe os ingredientes: Digite os itens que possui na caixa de texto na parte inferior (ex: ovo, leite, açúcar)

Envie a solicitação: Clique no botão Enviar ou pressione a tecla Enter

O ChefIAno apresentará o título, lista de ingredientes, modo de preparo detalhado, uma dica especial do chef e a sugestão de imagem visual do prato

Nova Receita: Para limpar o chat atual e iniciar uma nova pesquisa do zero, basta clicar em Nova receita no menu lateral

# Tecnologias Utilizadas
Frontend
React (com TypeScript e Vite)

Bootstrap + CSS3 (Layout responsivo com suporte a dispositivos móveis)

GitHub Pages (Hospedagem do Frontend)

Backend
ASP.NET Core Web API (C# .NET)

Google Gemini API (Integração de IA Generativa e Prompt Engineering)

Render (Hospedagem e deploy da API em nuvem)

# Funcionalidades
 Geração Inteligente de Receitas: Receitas dinâmicas com passo a passo formatado e dicas culinárias

 Tratamento de Exceções & Prompt Engineering:

 Ingredientes + Itens não comestíveis: Alerta quais itens não devem ser consumidos e cria a receita com os restantes

 Pratos prontos (ex: 'Pizza'): Oferece o passo a passo para preparar o prato do zero

 Inputs aleatórios/abstratos: Responde com receitas fictícias e bem-humoradas dentro da persona de Chef

 Reinício de Sessão: Botão Nova receita para resetar o estado da tela instantaneamente

 Layout Responsivo: Otimizado para telas desktop e smartphones

 A lista de receitas salvas no menu lateral funciona como protótipo visual de interface se houvesse banco de dados
