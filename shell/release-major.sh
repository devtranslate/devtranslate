set -e
yarn build
git checkout develop
git pull origin
git checkout changelog
git pull origin
git merge develop

changelog -m -u https://github.com/devtranslate/devtranslate.github.io
npm version major --no-git-tag-version

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]');

git add .

git commit -m ":memo: [$PACKAGE_VERSION] Update CHANGELOG.md for a 'MAJOR' version"
git push origin

git checkout develop
git pull origin
git merge changelog
git push origin

git tag -a $PACKAGE_VERSION -m "$PACKAGE_VERSION"

git push --tags
