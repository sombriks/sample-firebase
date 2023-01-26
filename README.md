# sample firebase

testing everything firebase has

## how to run this project

```bash
npm install
npm run emulators
# do this into another terminal
npm run dev
```

## how to create a project skeleton like this

```bash
mkdir sample-firebase
cd sample-firebase
npm init -y
npm i -D firebase-tools
npx firebase login
npm firebase init
# several interactive prompts...
```

select any firebase feature you wish, except for functions

add `firebase emulators:start` on package.json as the "emulators" script

create another project with [create-vue](https://github.com/vuejs/create-vue)
and move the artifacts into this new project.

change `hosting>public` folder from _public_ to _dist_ in
[firebase.json](firebase.json).

[create a web application on firebase web console](https://firebase.google.com/docs/web/setup?)
and put the info inside a [.env file](.env). also add it as
[secrets in your github project](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
if you plan to use actions to build and deploy.

## known issues

- if you plan to use firebase functions you will need a
  [blaze plan](https://firebase.google.com/pricing) for your firebase project.
- [GitHub action](https://github.com/FirebaseExtended/action-hosting-deploy)
  only publishes the hosting project. complete deploy running locally only.

## next steps

- [X] how to combine emulators structure into modern frontend tools
- [X] the use of cloud functions
- [X] the use of firebase authentication
- [X] use of firebase hosting
- [X] the use of firestore / realtime database
- [ ] use of file store
- [ ] use of pub/sub
- [ ] how to properly setup GitHub action to build and deploy
