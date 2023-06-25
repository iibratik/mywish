#!/usr/bin/env sh

set -e
npm run build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/iibratik/mywish.git main:gh-pages

cd -