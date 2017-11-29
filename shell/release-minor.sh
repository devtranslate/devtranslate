#!/bin/bash
set -e
yarn build
git checkout master
git pull origin
git checkout docs/changelog
git pull origin
git merge master

changelog -m -u https://github.com/devtranslate/devtranslate.github.io
npm version minor --no-git-tag-version
bash package.json

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]');

git add .

git commit -m ":memo: [$PACKAGE_VERSION] Update CHANGELOG.md for a 'MINOR' version"
git push origin

git checkout master
git pull origin
git merge docs/changelog
git push origin

git tag -a $PACKAGE_VERSION -m "$PACKAGE_VERSION"

git push --tags
