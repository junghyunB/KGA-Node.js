# webpack

번들시스템

a.js 
b.js -> webpack -> app.js

webpack 

nodejs 환경에서 돌아간다.

npx webpack build ./src/a.js


| - /node_modules
| - /dist
| - /src
| -- a.js
| - package.json

a.js 파일을 dist/main.js 라고 해준것

default ./dist
filename: main.js
설정을 통해서 바꿀수는 있다.

webpack.config.js 파일 생성

npm install ts-loader

