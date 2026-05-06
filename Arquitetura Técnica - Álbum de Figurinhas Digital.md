# **Arquitetura Técnica: Álbum de Figurinhas Digital Customizado**

Este documento descreve a estrutura técnica, lógica de componentes e stack tecnológica definida para o projeto de Álbum de Figurinhas Digital.

## **1\. Stack Tecnológica**

* **Frontend:** React com TypeScript e biblioteca **React-Konva** para manipulação do canvas.  
* **Backend:** Node.js com TypeScript e API REST.  
* **Ambiente:** Servidor Linux (Self-hosted) rodando em computador pessoal. Backend, Frontend e ambiente de dados rodando em 3 containers Docker diferentes.  
* **Banco de Dados Híbrido:**  
  * **SQLite:** Fonte da verdade para lógica de negócio, inventário, transações de troca, tags, pesos de raridade e definições de slots.  
  * **MongoDB:** Gerenciamento de metadados de mídia, caminhos de arquivos e informações flexíveis de figurinhas.

## **2\. Modelagem de Dados (Entidades Principais)**

### **SQLite (Relacional)**

* **Users:** Gerenciamento simples de login e senha (texto claro) e pontuação total.  
* **Inventory:** Relação entre usuário e sticker\_id, contendo a quantidade disponível e o nível de colagem (0 a 3).  
* **Slots:** Definição de layout (página, coordenadas x/y, rotação, formato e sticker\_id alvo).  
* **Trades:** Controle atômico de trocas e doações com status (Pendente, Aceito, Recusado).  
* **Tags/Raridade:** Tabelas para suporte ao algoritmo de sorteio e filtragem de subconjuntos.

### **MongoDB (Documentos)**

* **Stickers:** Referência para o caminho da imagem bruta, metadados de exibição (zoom/offset padrão) e cópia das tags para busca rápida de mídia.

## **3\. Lógica de Componentes e Funcionalidades**

* **Sistema de Sorteio (Gacha):** Baseado em pesos numéricos acumulados. Permite figurinhas repetidas no mesmo pacote. Caso uma tag possua poucos itens, o sistema completa o pacote com repetições.  
* **Canvas e Colagem:** Uso do Konva.js para implementar a lógica de "Snap-to-slot". O frontend é responsável por sobrepor a foto bruta ao molde sem realizar o crop físico da imagem.  
* **Níveis de Colagem:** A figurinha pode ser colada 3 vezes. O sistema aplica bordas visuais diferenciadas via código (CSS/Konva) para cada nível, aumentando o contador no banco.  
* **Segurança:** Autenticação ultra-simples via ID de usuário enviado nos headers das requisições, sem uso de criptografia complexa ou JWT robusto.

## **4\. Fluxo de Administração**

* **Editor de Páginas:** Interface separada para o Admin posicionar slots, definir rotações e formatos.  
* **Gestão de Imagens:** O Admin realiza o upload e o ajuste inicial. O sistema mantém a imagem bruta para permitir visualização ampliada e futura exportação.