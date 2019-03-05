# tree-shaking

This repo basically follows this webpack doc: [tree-shaking](https://webpack.js.org/guides/tree-shaking/) but the goal of this is to explore at what points this breaks down.

You can hop to different points in the code by checking out the different tags. They increase in complexity of the application.

This stuff is kind of hard to detail in a readme so you will have to take a look at the dist folder and each build to see the output.

I attempted to beautify it as much as I could.

## Step 1

This is basically the tutorial still. So I have the `math.js` that exports two functions and I only use one of them as part of my app. These are named exports and pretty easy for webpack to identify.

## Step 2

Changed the `math.js` code to use a class and have a default export.


