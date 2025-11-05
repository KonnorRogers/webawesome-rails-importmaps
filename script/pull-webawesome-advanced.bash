#!/bin/bash

# USAGE
# ./bin/pull-webawesome-advanced.bash -d vendor/javascript/ -s public/webawesome-styles -v 3.0.0

echo "Must run the correct command as detailed above and then uncomment the next line's exit so to prevent accidentally running a pull."
exit 

while getopts ':d:s:v:k' opt
do
  case "$opt" in
    'd')destination_directory="${OPTARG%/}" # remove trailing slash if provided
      ;;
    's')styles_destination_directory="${OPTARG%/}"
      ;;
    'v')version="${OPTARG}"
      # Find versions here => https://www.npmjs.com/package/@awesome.me/webawesome?activeTab=versions
      ;;
    'k')keep_react_and_typescript=1;
      ;;
  esac
done

cd "$(dirname "$0")"
cd "../" # goes to root of repo.

destination_directory=${destination_directory:-public}/webawesome

rm -rf webawesome.tgz
curl -Lo webawesome.tgz https://registry.npmjs.org/@awesome.me/webawesome/-/webawesome-${version:-3.0.0}.tgz
mkdir -p $destination_directory

echo "* EXTRACTING TO $destination_directory"
tar -xzf webawesome.tgz -C ./$destination_directory --strip-components=1
rm -rf ./$destination_directory/dist # Remove the unbundled version
mv ./$destination_directory/dist-cdn ./$destination_directory/dist # Move the bundled version to /dist

if [ ! -z "$styles_destination_directory" ]
then
  echo "* MOVING STYLES TO $styles_destination_directory"
  mv ./$destination_directory/dist/styles ./$styles_destination_directory
fi

if [ -z "$keep_react_and_typescript" ]
then
  echo "* REMOVE REACT AND TYPESCRIPT FILES"
  rm -rf ./$destination_directory/dist/react
  find ./$destination_directory -name "*.ts" -type f -delete
fi
echo "* REMOVE TESTS"
rm -rf ./$destination_directory/dist/internal # tests
rm webawesome.tgz

echo "* FINISHED. SEE README TO MAKE SURE CONFIG/IMPORTMAP.RB AND APP/JAVASCRIPT/APPLICATION.JS ARE CONFIGURED CORRECTLY."
