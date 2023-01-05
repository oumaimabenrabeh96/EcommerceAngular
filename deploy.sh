#!/bin/bash

# Set up variables
APP_NAME='ecommerce'
BUILD_DIR='dist/ecommerce'
SERVER='example.com'
REMOTE_DIR='/var/www/$APP_NAME'

# Sync built files to server
rsync -avzhe ssh --delete $BUILD_DIR/ $SERVER:$REMOTE_DIR
