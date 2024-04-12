# Principais Comandos do Git

## Configuração

Configurar o nome de usuário:
git config --global user.name "Seu Nome"

Configurar o email:
git config --global user.email "seuemail@example.com"

## Iniciar um Repositório

Iniciar um novo repositório:
git init

## Trabalhando com Alterações

Adicionar arquivos ao próximo commit:
git add <nome_do_arquivo>

Adicionar todos os arquivos modificados e excluídos ao próximo commit:
git add .

Verificar o status dos arquivos modificados:
git status

Fazer um commit com as alterações:
git commit -m "Mensagem do commit"

## Ramificações (branch)

Criar uma nova ramificação:
git branch <nome_da_ramificação>

Mudar para uma ramificação específica:
git checkout <nome_da_ramificação>

## Fusão (merge)

Fazer a fusão de uma ramificação na ramificação atual:
git merge <nome_da_ramificação>

## Trabalhando com Repositórios Remotos (envio para o Github)

Adicionar um repositório remoto:
git remote add <nome_remoto> <URL_do_repositório>

Enviar alterações para um repositório remoto:
git push <nome_remoto> <ramificação_local>

Obter alterações de um repositório remoto:
git pull <nome_remoto> <ramificação_remota>

Obter todo conteúdo do repositório remoto:
git fetch -p

## Investigação e Histórico

Exibir o histórico de commits:
git log

Exibir mudanças entre dois commits:
git diff <commit1> <commit2>

## Desfazendo Alterações

Desfazer as alterações em um arquivo não commitado:
git checkout -- <nome_do_arquivo>

Desfazer o último commit mantendo as alterações:
git reset --soft HEAD~1

Desfazer o último commit e descartar as alterações:
git reset --hard HEAD~1

## Outros

Clonar um repositório:
git clone <URL_do_repositório>

Criar e mudar para uma nova ramificação em um único comando:
git checkout -b <nome_da_ramificação>

Navegar entre branchs:
git checkout <nome_da_ramificação>


