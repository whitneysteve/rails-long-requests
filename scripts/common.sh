#!/bin/bash

function commit() {
  msg "Committing changes"
  message="$1"
  git add .
  git commit -m "${message:-$(git rev-parse --abbrev-ref HEAD)}"
  git push origin $(git rev-parse --abbrev-ref HEAD)
}

function lint() {
  msg "Running Linter"
  yarn run lint
}

function run() {
  msg "Running Locally..."
  yarn start
}

function msg() {
  echo
  echo "*************************"
  echo $1
  echo "*************************"
  echo
}
