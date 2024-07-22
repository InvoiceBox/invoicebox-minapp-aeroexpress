#!/bin/bash

git checkout develop &&

# clean up
rm -rf docs &&

# build storybook
STORYBOOK_ENV_PROD=true ./node_modules/.bin/storybook build --output-dir docs &&

# set domain for github pages
echo "ui.aeroexpress.business" > ./docs/CNAME

# stage, сommit and push storybook
git add docs && 
git commit -m "storybook build" &&
git push &&

# merge to master
git checkout main && 
git merge develop && 
git push && 

git checkout develop