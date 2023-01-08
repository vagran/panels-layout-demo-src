#!/bin/bash

cd dist || exit
rm -rf .git
echo > .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:vagran/panels-layout-demo.git master
