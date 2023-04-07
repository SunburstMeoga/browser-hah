#!/bin/bash

set -e
npm run build
sudo ln -snf `pwd`/dist /var/www/browser
chmod o=x ~
#chmod o=rx ~
echo 'dist OK!'
# sudo su -s /bin/bash www-data
