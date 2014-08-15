#!/bin/bash

CWD=$(dirname "$0")
THEME="$HOME/.spm/themes/cmd"

cd $CWD

if ! which nico > /dev/null; then
    echo "install nico"
    npm install nico -g
else
    echo "you have installed nico"
fi

if [ ! -d $THEME ]; then
    echo "clone nico cmd theme"
    git clone https://github.com/spmjs/nico-cmd.git $THEME
else
    echo "update nico cmd theme"
    cd $THEME
    git pull origin master
    cd $CWD
fi

if ! which jscoverage > /dev/null; then
    echo "install jscoverage"

    npm install jscoverage -g
else
    echo "you have installed jscoverage"
fi

if ! which jade > /dev/null; then
    echo "install jade"
    npm install jade -g
else
    echo "you have installed jade"
fi

if ! which mocha > /dev/null; then
    echo "install mocha"
    npm install mocha -g
else
    echo "you have installed mocha"
fi

if ! which phantomjs > /dev/null; then
    echo "install mocha phantomjs"
    npm install phantomjs -g
else
    echo "you have installed phantomjs"
fi

if ! which mocha-phantomjs > /dev/null; then
    echo "install mocha phantomjs"
    npm install mocha-phantomjs -g
else
    echo "you have installed mocha-phantomjs"
fi
