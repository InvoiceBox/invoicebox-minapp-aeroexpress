#!/bin/bash

git checkout develop &&

# clean up
rm -rf docs &&

# build storybook
./node_modules/.bin/storybook build --output-dir docs &&

# set domain for github pages
# echo "ui.invoicebox.ru" > ./docs/CNAME

# stage, сommit and push storybook
git add docs && 
git commit -m "storybook build" &&
git push &&

# merge to master
git checkout main && 
git merge develop && 
git push && 

git checkout develop