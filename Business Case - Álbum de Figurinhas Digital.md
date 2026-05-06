# **Business Case: Álbum de Figurinhas Digital Customizado**

Este documento detalha o Caso de Negócio para o desenvolvimento de um sistema de álbum de figurinhas digital, focado em fortalecer laços sociais entre amigos através de colecionismo e gamificação.

## **1\. Visão Geral e Proposta de Valor**

* **Problema:** Necessidade de aumentar a interação social e criar memórias compartilhadas em um grupo de amigos de forma lúdica.  
* **Solução:** Um software de álbum de figurinhas digital onde as figurinhas são fotos e desenhos do próprio grupo.  
* **Diferencial:** Alta customização, gratuito, digital e focado em um nicho fechado de conhecidos.

## **2\. Dinâmica do Usuário (Gamificação)**

* **Aquisição de Conteúdo:** O usuário recebe 3 pacotes por semana via um processo automatizado (Cron job). Temporadas especiais podem conceder pacotes adicionais.  
* **Níveis de Colagem:** Cada figurinha pode ser colada até 3 vezes no mesmo slot. Cada nível (1, 2 ou 3\) desbloqueia uma borda visual diferente e aumenta a pontuação do usuário.  
* **Raridade:** Existência de figurinhas "Brilhantes" com efeitos especiais.  
* **Ranking:** Ranking global visível a todos, baseado na quantidade total de colagens. Bônus de pontuação são concedidos ao completar páginas, fechar conjuntos de tags ou colecionar figurinhas raras.

## **3\. Sistema de Trocas e Social**

* **Interação:** Negociação direta e privada entre dois usuários (proposta de aceitar ou recusar).  
* **Visibilidade:** Todos os usuários podem visualizar o álbum dos outros para identificar necessidades de troca.  
* **Doação:** O sistema permite a doação de figurinhas sem contrapartida obrigatória.

## **4\. Gestão e Administração**

* **Papel do Admin:** Responsável por criar o conteúdo, definir temporadas e gerenciar o layout do álbum.  
* **Canvas Livre:** O administrador define a posição (x, y), rotação e formato (estrela, círculo, quadrado, etc.) de cada slot de figurinha em páginas de tamanho limitado.  
* **Tags:** Figurinhas são categorizadas por tags (ex: 'futebol', 'natal'), que determinam em quais pacotes elas podem aparecer.

## **5\. Especificações Técnicas (MVP)**

* **Plataforma:** Web App com interface de scroll infinito dividida por temporadas.  
* **Armazenamento:** Self-hosting (armazenamento local no computador pessoal do proprietário).  
* **UX:** Funcionalidade de "snap" (imã) para colagem no canvas, animações de abertura e visualização ampliada ao clicar na figurinha.

*Este documento serve como base para a definição da arquitetura técnica e implementação do software.*