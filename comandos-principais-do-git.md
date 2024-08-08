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
git branch <nomgite_da_ramificação>

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

Deletar branch:
git branch -D <nome_da_ramificação>

## Configurar Projeto no VSCode

-Criar Repositório no GitHub:

## Configurar Projeto Localmente no VSCode:

-Abra a pasta do projeto no VSCode e o terminal integrado.
-Inicialize o repositório: git init.
-Adicione arquivos: git add ..
-Faça o primeiro commit: git commit -m "Initial commit".

## Conectar ao Repositório GitHub:

-Adicione o repositório remoto: git remote add origin URL_DO_REPOSITORIO.
-Empurre o commit inicial: git push -u origin master.
-Gerenciar Branches

## Criar e Gerenciar Branches:

-Criar branch: git checkout -b nome-da-branch.
-Ver branches: git branch.
-Mudar de branch: git checkout nome-da-branch.
-Empurrar branch: git push -u origin nome-da-branch.

## Deletar Branches:

-Deletar branch local: git branch -d nome-da-branch ou git branch -D nome-da-branch.
-Deletar branch remota: git push origin --delete nome-da-branch.

-Comandos Adicionais Úteis

## Verificar o status do repositório:

-git status: Mostra o estado atual do repositório.

## Verificar o histórico de commits:

-git log: Exibe o histórico de commits do repositório.

## Adicionar mudanças específicas ao staging:

-git add nome-do-arquivo: Adiciona um arquivo específico ao staging.

## Desfazer mudanças no staging:

-git reset nome-do-arquivo: Remove um arquivo do staging sem alterar o arquivo em si.

## Desfazer o último commit:

-git reset --soft HEAD~1: Mantém as mudanças no staging.
-git reset --hard HEAD~1: Remove todas as mudanças, incluindo as não commitadas.

## Atualizar o repositório local com mudanças remotas:

-git pull origin nome-da-branch: Atualiza a branch local com mudanças do repositório remoto.

## Clonar um repositório:

-git clone URL_DO_REPOSITORIO: Clona um repositório remoto para o diretório atual.

## Verificar diferenças entre arquivos:

-git diff: Mostra as diferenças entre o estado atual do repositório e as mudanças não commitadas.
git diff --staged: Mostra as diferenças entre o estado atual do repositório e as mudanças no staging.

## Reverter um commit específico:

-git revert <commit-hash>: Reverte as mudanças feitas por um commit específico criando um novo commit.

## Criar uma tag:

-git tag -a v1.0 -m "Versão 1.0": Cria uma tag anotada.
-git push origin v1.0: Envia a tag para o repositório remoto.

## Gerenciar branches remotas:

-git branch -r: Lista as branches remotas.
-git fetch: Atualiza as referências remotas sem mesclar mudanças.

## Salvar mudanças temporárias:

-git stash: Salva mudanças não commitadas para aplicá-las mais tarde.
-git stash pop: Recupera as mudanças salvas pelo git stash.