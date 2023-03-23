#!/bin/bash
set -e
npm run build
sudo cp -r ./dist/* /var/www/browser/
echo 'dist OK!'