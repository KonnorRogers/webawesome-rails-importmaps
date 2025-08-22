cd "$(dirname "$0")"
cd "../" # goes to root of repo.
rm -rf webawesome.tgz
curl -Lo webawesome.tgz https://registry.npmjs.org/@awesome.me/webawesome/-/webawesome-3.0.0-beta.4.tgz
mkdir -p public/webawesome
tar -xzvf webawesome.tgz -C ./public/webawesome --strip-components=1
rm -rf ./public/webawesome/dist # Remove the unbundled version
mv ./public/webawesome/dist-cdn ./public/webawesome/dist # Move the bundled version to /dist
