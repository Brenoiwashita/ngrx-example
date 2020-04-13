# New Arch

Boilerplate da nova arquitetura para projetos em Angular 7 com NgRx e GraphQL.

## Configurações

### Prettier

Em todos os projetos que utilizam o **new-arch** estaremos utilizando o **Prettier**, que é um formatador de código opinativo desenvolvido para diversas linguagens. Além do pacote já instalado no projeto, podemos utilizar uma extensão para o editor de código (ex.: VS Code) que formatará o código ao realizarmos alguma ação específica. A configuração recomendada para a extensão Prettier do VS Code é a seguinte:

```json
"prettier.requireConfig": true,
"editor.formatOnSave": false,
"[typescript]": {
	"editor.formatOnSave": true
},
"[javascript]": {
	"editor.formatOnSave": true
}

```

## Sobre

## Executando a aplicacao

Para executar usar os seguintes comandos:

```sh
npm install && npm start
```

Acesse a URL http://localhost:4200

## GraphQL

Quando tiver arquivos de queries/mutations, adicionar a execução do script Apollo presente no package.json para gerar os types necessários.

```json
{
  "start": "npm run apollo && ng serve --sourceMap=true --proxy-config proxy.conf.json",
  "build": "npm run apollo && ng build --prod --build-optimizer false"
}
```

## Módulos existentes

- Autenticação:
  - Interceptor token JWT;
  - Guarda de rota;
  - Integração do login com o core legado.
- Inputs:
  - Inputs de texto, checkbox e radio com validação inclusa;
  - Mensagem de validação através do componente de input.
- Services:
  - Download de arquivos;x
- Telas:
  - Módulo exemplo com NGRX (State, Reducer, Actions, Selectors e Effects).
- Alertas:
  - Módulo independente que pode ser acessado em todo o projeto;
  - State próprio.
- Login:
  - Módulo independente;
  - State próprio.
- Modal:
  - Módulo de modal que utiliza o NgbModal da biblioteca @ng-bootstrap;
  - Possibilita a criação de modais dinâmicos em qualquer parte da aplicação.
- Outros:
  - Parâmetros por perfil;
  - Parâmetros bloco.

## Sonar

Alterar as chaves **projectKey** e **projectName** do arquivo **sonar-project.properties** para condizer com o projeto que está sendo desenvolvido.

## Erros comuns

### Testando NgRx Effects que retorna EMPTY

Em todos os projetos que utilizam GraphQL, os erros são tratados pelo módulo do GraphQL e apenas retornamos um _Observable EMPTY_ em caso de erro nas chamadas de service dentro do Effects. Para testarmos basta comparar a ação com um retorno de erro com um **cold Observable vazio**, da seguinte forma:

```js
it('should buscarErro unsuccessfully', () => {
  const action = new ConsistenciaActions.BuscarErro();
  const error = new Error();
  const response = cold('-#|', {}, error);

  // Cria um Observable EMPTY
  const expected = cold('');

  actions = hot('-a--', { a: action });
  service.buscarErros.and.returnValue(response);

  // Comparação que é realiazada com o catchError do Effects
  expect(effects.buscarErro$).toBeObservable(expected);
});
```

Exemplo pode ser encontrado no arquivo consistencia.effects.spec.ts e explicação neste [comentário](https://stackoverflow.com/a/48137400/5512687). Em projetos que foram criados anteriormente a esta definição, as funções de retorno de erro dentro do Effects devem ser testadas normalmente.
