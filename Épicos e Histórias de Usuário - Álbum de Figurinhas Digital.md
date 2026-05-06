# **Épicos, Histórias de Usuário e Tarefas: Álbum de Figurinhas Digital**

Este documento detalha a organização do projeto em Épicos, decompostos em Histórias de Usuário e suas respectivas tarefas técnicas.

## ---

**Épico 1: Fundação e Infraestrutura Híbrida**

### **História de Usuário 1.1: Setup do Ambiente**

**Como** desenvolvedor, **quero** configurar o ambiente Node.js e a conexão com os bancos de dados **para que** eu possa iniciar o desenvolvimento das funcionalidades.

* Tarefa 1: Iniciar projeto Node.js com TypeScript.  
* Tarefa 2: Configurar SQLite com a tabela de usuários e inventário.  
* Tarefa 3: Configurar conexão com MongoDB para metadados de mídia.  
* Tarefa 4: Implementar middleware de autenticação ultra-simples via header x-user-id.

## ---

**Épico 2: Gestão de Conteúdo e Editor de Páginas (Admin)**

### **História de Usuário 2.1: Criação de Slots e Layout**

**Como** administrador, **quero** definir a posição e o formato dos slots em uma página **para que** eu possa montar o layout do álbum.

* Tarefa 1: Criar interface de upload de fotos brutas.  
* Tarefa 2: Implementar ferramenta de posicionamento (x, y, rotação) de slots.  
* Tarefa 3: Salvar metadados de zoom e offset da foto no MongoDB.  
* Tarefa 4: Persistir a configuração da página no SQLite.

## ---

**Épico 3: Mecanismo de Colecionismo e Gacha**

### **História de Usuário 3.1: Abertura de Pacotes**

**Como** usuário, **quero** abrir pacotinhos de figurinhas **para que** eu possa aumentar minha coleção.

* Tarefa 1: Desenvolver algoritmo de sorteio baseado em pesos de raridade.  
* Tarefa 2: Implementar lógica de filtragem por tags no SQLite.  
* Tarefa 3: Criar script de Cron Job para distribuição semanal de pacotes.  
* Tarefa 4: Criar endpoint para realizar a abertura do pacote e atualizar o inventário.

## ---

**Épico 4: Experiência de Colagem e Álbum Interativo**

### **História de Usuário 4.1: Colagem com Snap**

**Como** usuário, **quero** arrastar e colar minhas figurinhas nos slots corretos **para que** eu complete meu álbum.

* Tarefa 1: Integrar React-Konva para renderização do canvas.  
* Tarefa 2: Implementar lógica de snap magnético no frontend.  
* Tarefa 3: Criar lógica de evolução de bordas para os 3 níveis de colagem.  
* Tarefa 4: Implementar trigger de verificação de bônus de pontuação no backend após colagem.

## ---

**Épico 5: Ecossistema Social e Trocas**

### **História de Usuário 5.1: Proposta de Troca Privada**

**Como** usuário, **quero** propor trocas com meus amigos **para que** eu consiga as figurinhas que me faltam.

* Tarefa 1: Criar lógica de bloqueio de figurinhas (quantity\_locked) no inventário.  
* Tarefa 2: Implementar interface de visualização do álbum de outros usuários.  
* Tarefa 3: Desenvolver sistema de aceitar/recusar propostas com transação atômica no SQLite.  
* Tarefa 4: Implementar ranking global baseado no total de colagens.

## ---

**Épico 6: Visualização e Exportação de Mídia**

### **História de Usuário 6.1: Visualização Ampliada**

**Como** usuário, **quero** ver a foto original da figurinha em tamanho grande **para que** eu possa apreciar os detalhes.

* Tarefa 1: Criar modal de visualização que remove a máscara do molde.  
* Tarefa 2: Implementar funcionalidade de exportação da figurinha composta (foto \+ moldura).