# **Épicos, Histórias de Usuário e Tarefas: Álbum de Figurinhas Digital**

Este documento detalha a organização do projeto em Épicos, decompostos em Histórias de Usuário e suas respectivas tarefas técnicas.

---

## **Épico 1: Fundação e Infraestrutura Híbrida**

### **História de Usuário 1.1: Setup do Ambiente e Dockerização**
**Como** desenvolvedor, **quero** configurar o ambiente de desenvolvimento usando Docker **para que** o setup seja consistente entre diferentes máquinas e o deploy seja simplificado.
* Tarefa 1: Criar Dockerfile para o Frontend (React).
* Tarefa 2: Criar Dockerfile para o Backend (Node.js).
* Tarefa 3: Configurar Docker Compose orquestrando os serviços e os bancos de dados (MongoDB + SQLite).
* Tarefa 4: Configurar volumes para persistência de dados dos bancos.

### **História de Usuário 1.2: Conexão com Bancos de Dados Híbridos**
**Como** desenvolvedor, **quero** implementar as camadas de acesso a dados para SQLite e MongoDB **para que** eu possa persistir as regras de negócio e os metadados de mídia de forma eficiente.
* Tarefa 1: Configurar ORM/Driver para SQLite (ex: Better-SQLite3 ou Prisma).
* Tarefa 2: Configurar Driver para MongoDB (Mongoose).
* Tarefa 3: Implementar esquemas iniciais (Users, Inventory no SQLite; Stickers no MongoDB).
* Tarefa 4: Validar integridade referencial entre stickers_id no SQLite e metadados no MongoDB.

---

## **Épico 2: Gestão de Conteúdo e Editor de Páginas (Admin)**

### **História de Usuário 2.1: Editor de Layout de Páginas**
**Como** administrador, **quero** posicionar slots de figurinhas livremente em um canvas **para que** eu possa criar álbuns visualmente atraentes.
* Tarefa 1: Implementar interface administrativa com React-Konva para "drag and drop" de slots.
* Tarefa 2: Adicionar controles de rotação e escala para cada slot individual.
* Tarefa 3: Implementar suporte a diferentes formatos de slot (Quadrado, Círculo, Estrela).
* Tarefa 4: Persistir coordenadas (x, y), rotação e formato no banco de dados.

### **História de Usuário 2.2: Gestão de Temporadas e Tags**
**Como** administrador, **quero** criar temporadas e organizar figurinhas por tags **para que** o conteúdo seja entregue de forma organizada aos usuários.
* Tarefa 1: Criar CRUD de Temporadas (Nome, Data Início/Fim, Status).
* Tarefa 2: Implementar sistema de tags associadas às figurinhas.
* Tarefa 3: Criar interface para definir pesos de raridade por tag/temporada.

---

## **Épico 3: Mecanismo de Colecionismo e Gacha**

### **História de Usuário 3.1: Algoritmo de Sorteio (Gacha)**
**Como** sistema, **quero** sortear figurinhas baseadas em pesos de raridade e tags **para que** a experiência de abertura de pacotes seja gamificada e equilibrada.
* Tarefa 1: Implementar algoritmo de sorteio ponderado no Backend.
* Tarefa 2: Criar lógica para evitar pacotes vazios (completar com repetidas caso falte figurinhas na tag).
* Tarefa 3: Garantir que figurinhas de raridade "Brilhante" tenham efeitos visuais distintos no sorteio.

### **História de Usuário 3.2: Distribuição Automatizada de Pacotes**
**Como** usuário, **quero** receber 3 pacotes novos toda semana automaticamente **para que** eu tenha motivos para voltar ao sistema regularmente.
* Tarefa 1: Configurar Cron Job (Node-cron) para rodar semanalmente.
* Tarefa 2: Implementar lógica de "estoque de pacotes" no perfil do usuário.
* Tarefa 3: Criar endpoint para o usuário "reivindicar" e abrir os pacotes pendentes.

---

## **Épico 4: Experiência de Colagem e Álbum Interativo**

### **História de Usuário 4.1: Colagem com "Snap" e Evolução**
**Como** usuário, **quero** arrastar figurinhas para seus slots e vê-las evoluir de nível **para que** eu sinta progresso na minha coleção.
* Tarefa 1: Implementar lógica de "snap" (ímã) magnético no frontend usando Konva.
* Tarefa 2: Desenvolver sistema de níveis (1, 2 e 3) por slot colado.
* Tarefa 3: Aplicar bordas visuais diferenciadas via CSS/Konva para cada nível de evolução.
* Tarefa 4: Implementar verificação de completitude: quando o nível 3 é atingido, marcar slot como "Masterizado".

### **História de Usuário 4.2: Navegação e Feedback de Progresso**
**Como** usuário, **quero** navegar entre as páginas do álbum e ver meu progresso geral **para que** eu saiba quanto falta para completar a coleção.
* Tarefa 1: Criar sistema de paginação horizontal (estilo álbum físico).
* Tarefa 2: Implementar barra de progresso por página e por temporada.
* Tarefa 3: Adicionar feedbacks sonoros/visuais ao completar uma página inteira.

---

## **Épico 5: Ecossistema Social e Trocas**

### **História de Usuário 5.1: Mercado de Trocas e Doações**
**Como** usuário, **quero** propor trocas ou doar figurinhas repetidas para meus amigos **para que** possamos nos ajudar a completar o álbum.
* Tarefa 1: Implementar interface de "Proposta de Troca" (Seu X por Meu Y).
* Tarefa 2: Criar aba de "Minhas Propostas" (Pendentes, Aceitas, Recusadas).
* Tarefa 3: Implementar funcionalidade de doação direta (enviar sem pedir nada em troca).
* Tarefa 4: Garantir transações atômicas no SQLite para evitar duplicação ou perda de itens.

### **História de Usuário 5.2: Ranking Global e Social**
**Como** usuário, **quero** ver minha posição em um ranking global **para que** eu possa competir de forma saudável com meus amigos.
* Tarefa 1: Implementar cálculo de pontuação baseado em colagens e níveis de evolução.
* Tarefa 2: Criar tela de ranking global visível a todos.
* Tarefa 3: Permitir que usuários visualizem o álbum público de outros competidores.

---

## **Épico 6: Visualização e Experiência do Usuário (UX)**

### **História de Usuário 6.1: Visualização Detalhada e Galeria**
**Como** usuário, **quero** ver a foto original da figurinha sem as máscaras do slot **para que** eu possa apreciar a memória afetiva da foto.
* Tarefa 1: Implementar modal de visualização em tela cheia ao clicar na figurinha colada.
* Tarefa 2: Criar "Galeria de Inventário" para ver todas as figurinhas possuídas (mesmo as não coladas).
* Tarefa 3: Implementar busca e filtros por tags na galeria.