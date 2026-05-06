# Documentação de Operação - Figumigos

Este documento contém os comandos essenciais para desenvolvimento, testes e gerenciamento do ambiente Docker.

## 🐳 Docker e Docker Compose

O projeto utiliza Docker para garantir que o ambiente de desenvolvimento seja idêntico entre todos os colaboradores.

### Subir o ambiente completo
Constrói as imagens e sobe os containers do Frontend, Backend e MongoDB em modo interativo (mostrando logs).
```bash
docker-compose up --build
```

### Subir em segundo plano (Detached)
Sobe os containers e libera o terminal.
```bash
docker-compose up -d
```

### Parar o ambiente
Para os containers que estão rodando em segundo plano.
```bash
docker-compose stop
```

### Derrubar e limpar volumes
Para os containers e **remove** as redes e volumes criados (cuidado: isso apaga os dados temporários do banco se não estiverem mapeados corretamente).
```bash
docker-compose down
```

### Ver logs
Acompanha os logs de todos os serviços ou de um específico.
```bash
docker-compose logs -f
# ou apenas do frontend
docker-compose logs -f frontend
```

---

## 🧪 Testes

### Frontend
Os testes do frontend utilizam **Vitest** e **React Testing Library**.

**Rodar testes uma única vez:**
```bash
cd frontend && npm test
```

**Rodar testes em modo "watch" (desenvolvimento):**
```bash
cd frontend && npx vitest
```

---

## 🛠 Comandos Úteis

### Instalar novas dependências no Frontend (sem Docker)
Se você estiver com o Node instalado localmente:
```bash
cd frontend && npm install <pacote>
```

### Reinstalar dependências dentro do Docker
Se você adicionou um pacote e quer que o Docker perceba a mudança sem reconstruir tudo do zero:
```bash
docker-compose up --build frontend
```
