#!/bin/bash

# Set up variables
APP_NAME='ecommerce'
BUILD_DIR='dist/ecommerce'
SERVER='http://gamerpc.epizy.com/'
REMOTE_DIR='/home/vol17_2/epizy.com/epiz_33325654'

# Sync built files to server
rsync -avzhe ssh --delete $BUILD_DIR/ $SERVER:$REMOTE_DIR
