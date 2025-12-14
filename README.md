# Pokémon Quiz (1º trabalho da disciplina Tópicos em Desenvolvimento de Aplicativos)

## Como Executar o Projeto
Siga os passos abaixo para baixar, configurar e rodar a aplicação em sua máquina local.

### Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

* Node.js (versão LTS recomendada)
* Git
* Dispositivo móvel com o app Expo Go instalado (Android ou iOS) OU um emulador configurado (Android Studio ou Xcode).

### 1. Clonar o Repositório
Abra o seu terminal (CMD, PowerShell, Terminal do VS Code) e execute o comando para baixar os arquivos do projeto:
```bash
git clone https://github.com/rbrmrtns/Trab1-TDA.git
```

Em seguida, entre na pasta do projeto que acabou de ser criada:
```bash
cd Trab1-TDA
```

### 2. Instalar as Dependências
Agora é necessário baixar as bibliotecas (node_modules) que o projeto utiliza.
```bash
npm install
```

### 3. Executar a Aplicação
Com tudo instalado, inicie o servidor de desenvolvimento do Expo:
```bash
npx expo start
```

Você verá um QR Code no terminal. Agora você tem duas opções:

#### Opção A: Rodar no seu Celular (Físico)
1. Baixe o aplicativo Expo Go na Google Play Store ou Apple App Store.
2. Garanta que seu celular e seu computador estejam conectados na mesma rede Wi-Fi.
3. Android: Abra o Expo Go e escaneie o QR Code que apareceu no terminal.
4. iOS (iPhone): Abra o app Câmera padrão do iOS, aponte para o QR Code e toque na notificação para abrir no Expo Go.

#### Opção B: Rodar no Emulador (Computador)
1. Garanta que o emulador (Android Studio ou Simulator do Xcode) já esteja aberto e rodando.
2. No terminal onde você rodou o npx expo start, pressione a tecla correspondente:
 1. Pressione a para abrir no Android.
 2. Pressione i para abrir no iOS (apenas Mac).
