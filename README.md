# figumigos

Sistema de álbum de figurinhas digitais customizado, pensado para um grupo fechado de usuários e hospedado em ambiente self-hosted.

## Ideia geral

O projeto transforma fotos e desenhos do próprio grupo em figurinhas colecionáveis, com mecânicas de gacha, colagem interativa, trocas privadas e ranking de progresso. A proposta é combinar memória afetiva, gamificação e interação social em um álbum digital acessível pela web.

## Principais funcionalidades

- Abertura de pacotes semanais com distribuição baseada em pesos de raridade e tags.
- Colagem das figurinhas em slots do álbum com comportamento de snap no canvas.
- Evolução visual das figurinhas conforme o nível de colagem.
- Sistema de trocas e doações entre usuários com controle de inventário.
- Visualização ampliada da imagem original da figurinha.
- Painel administrativo para criar páginas, posicionar slots e gerenciar mídias.

## Base técnica

- Frontend em React com TypeScript.
- Canvas com React-Konva para a experiência de colagem e visualização.
- Backend em Node.js com API REST e TypeScript.
- Persistência híbrida com SQLite para regras de negócio e MongoDB para metadados de mídia.
- Execução em containers Docker em servidor Linux self-hosted.

## Objetivo do MVP

Entregar uma primeira versão funcional do álbum digital com foco em colecionismo, socialização e administração do conteúdo, servindo como base para evoluções futuras do produto.
