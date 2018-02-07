## Introduction
Nest is a framework for building efficient, scalable [Node.js](http://nodejs.org) web applications. It uses modern JavaScript, is built with [TypeScript](http://www.typescriptlang.org) (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of [Express](https://expressjs.com/), allowing for easy use of the myriad third-party plugins which are available.

## Philosophy
In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications, giving rise to awesome projects like [Angular](https://angular.io/), [React](https://github.com/facebook/react) and [Vue](https://github.com/vuejs/vue) which improve developer productivity and enable the construction of fast, testable, extensible frontend applications. However, on the server-side, while there are a lot of superb libraries, helpers and tools for Node, none of them effectively solve the main problem - the architecture.

Nest aims to provide an application architecture out of the box which allows for effortless creation of highly testable, scalable, loosely coupled and easily maintainable applications.

## Features
- Built with [TypeScript](http://www.typescriptlang.org) (compatible with pure JavaScript + [Babel](http://babeljs.io/)
- **Easy** to learn - syntax similar to [Angular](https://angular.io/)
- **Familiar** - based on well-known libraries ([Express](https://github.com/expressjs/express) / [Socket.io](https://github.com/socketio/socket.io))
- **Dependency Injection** - built-in asynchronous **IoC** container with a **hierarchical injector**
- **WebSockets** module (based on [socket.io](https://github.com/socketio/socket.io), but you can bring your own library, by making use of `#!ts WebSocketAdapter`)
- **Modular** - defines an easy to follow module definition pattern so you can split your system into reusable modules
- **Reactive microservice** support with message patterns (built-in transport via TCP / [Redis](https://redis.io/), but other communication schemes can be implemented with `#!ts CustomTransportStrategy`)
- **Exception layer** - throwable web exceptions with status codes, exception filters
- **Pipes** - synchronous & asynchronous (e.g. validation purposes)
- **Guards** - attach additional logic in a declarative manner (e.g. role-based access control)
- **Interceptors** - built on top of [RxJS](https://github.com/reactivex/rxjs)
- Testing utilities (both **e2e & unit** tests)
- **More!**

## Installation
Start a project with **TypeScript**:

```sh
$ git clone https://github.com/nestjs/nest-typescript-starter.git your-project-name
$ cd your-project-name
$ npm install
$ npm start
```

Start a project with **JavaScript**:
```bash
$ git clone https://github.com/nestjs/javascript-starter.git project
$ cd project
$ npm install
$ npm run start
```

Start a New Project from Scratch with **NPM**:
```bash
$ npm i --save @nestjs/core @nestjs/common @nestjs/microservices @nestjs/websockets @nestjs/testing reflect-metadata rxjs
```

## People
Nest was created by [Wilson Hobbs](https://wilsonhobbs.com) and [Ange Picard](https://twitter.com/MonsieurMan) in 2018.

### Contributors
<p class="contributors"></p>

