# CSS Reset
A CSS reset intending to help combat unwanted environment attributes applied to your vacuum-developed components.

Many times I generate components or features in a vacuum to cut down development time when I'd otherwise have to set up local instances of complex environments. Once the components are deployed within the environment, I often find that unwanted CSS attributes have been applied. These typically come from the environment's master style guide or loaded frameworks. In well-designed applications this shouldn't be an issue - as you'll be adhering to the style guide but I've found in many legacy applications that the style guide is outdated and counterproductive to the features I'm trying to implement. Other times, I know that a component might be used in many different environments and I simply don't want to risk dealing with any of the parent's styling leaking into my component.

I created this simple reset to combat those issues mentioned above. The source for this reset comes from the default CSS attributes used to render markup in Chrome. I can't guarantee it's completely inclusive, but if you do find missing attributes, just let me know! 

## Installation / Running

Install [Node.js](https://nodejs.org/en/download/)

Install [Ruby](https://rubyinstaller.org/)

Update npm to the latest version.

```sh
$ npm install npm@latest -g
```

Install node_modules.

```sh
$ npm install
```

From the root directory, you can issue the following command. This will build your customized version of reset.css and place it in the /web directory.

```sh
$ gulp build
```