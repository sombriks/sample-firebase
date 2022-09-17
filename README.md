# sample firebase

testing everything firebase has

```bash
mkdir sample-firebase
cd sample-firebase
npm init -y
npm i -D firebase-tools
npx firebase login
npm firebase init
# several interactive prompts...
```

select any feature you wish

add `firebase emulators:start` on package.json as the "emulators" script, it's
cool

create another project with [create-vue](https://github.com/vuejs/create-vue)
and move the artifacts into this new project.

change `hosting>public` folder from _public_ to _dist_ in
[firebase.json](firebase.json).

create an application on firebase web console and put the info inside a .env
file

## next steps

- how to combine emulators structure into modern frontend tools
- how to properly setup github action to build and deploy
