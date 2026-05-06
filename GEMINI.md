# Figumigos - Project Instructions

Este arquivo contém as diretrizes fundamentais, convenções e arquitetura do projeto Figumigos. Ele deve ser seguido rigorosamente para garantir a consistência e integridade do sistema.

## 1. Visão Geral do Projeto
Figumigos é um sistema de álbum de figurinhas digitais customizado para grupos fechados. O foco é colecionismo, gamificação (gacha, rankings) e interação social (trocas).

## 2. Stack Tecnológica
- **Frontend:** React (TypeScript) + React-Konva (Canvas).
- **Backend:** Node.js (TypeScript) + Express (REST API).
- **Banco de Dados (Híbrido):**
  - **SQLite:** Fonte da verdade para lógica de negócio, inventário, transações e slots.
  - **MongoDB:** Metadados de mídia e caminhos de arquivos.
- **Infraestrutura:** Docker (3 containers: Frontend, Backend, DB), hospedagem Linux self-hosted.

## 3. Conceitos Core e Regras de Negócio
- **Gacha (Sorteio):** Baseado em pesos de raridade e tags. 3 pacotes semanais por usuário via cron job.
- **Colagem (Canvas):** Lógica de "Snap-to-slot" via Konva.js. Não há crop físico da imagem; a sobreposição é feita no canvas.
- **Evolução de Figurinhas:** Cada figurinha pode ser colada até 3 vezes. Cada nível (1-3) adiciona uma borda visual (CSS/Konva) e aumenta a pontuação.
- **Trocas:** Sistema de propostas privadas (Pendente/Aceito/Recusado) e doações.
- **Admin:** Editor de páginas para posicionamento livre de slots (x, y, rotação, formato).

## 4. Convenções e Padrões de Código
- **Linguagem:** TypeScript em todo o projeto.
- **Backend:** 
  - Seguir padrões RESTful.
  - Autenticação simplificada via `user-id` nos headers (conforme especificado na arquitetura).
- **Frontend:**
  - Componentização clara.
  - Uso de Konva para interações complexas com o álbum.
- **Dados:**
  - SQLite para integridade referencial e transações atômicas (especialmente trocas).
  - MongoDB para flexibilidade de metadados.

## 5. Fluxo de Desenvolvimento e Deploy
- **Docker:** O ambiente de desenvolvimento deve espelhar o de produção usando containers.
- **Persistência:** Garantir que os volumes Docker estejam configurados para não perder dados do SQLite e MongoDB.

## 6. Documentação de Referência
- `Arquitetura Técnica - Álbum de Figurinhas Digital.md`: Detalhes de implementação.
- `Business Case - Álbum de Figurinhas Digital.md`: Regras de negócio e visão.
- `Épicos e Histórias de Usuário - Álbum de Figurinhas Digital.md`: Requisitos funcionais.
