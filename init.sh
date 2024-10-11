#!/bin/bash
# This script is intended to execute on a fresh Ubuntu 24 LTS instance.
set -o errexit
sudo apt update
sudo apt install --yes git curl
script=$(mktemp --suffix=.sh)
curl -fsSL https://deb.nodesource.com/setup_20.x -o "$script"
sudo -E bash "$script"
sudo apt install --yes nodejs
git clone https://github.com/johnnygerard/bug-playwright-button-click.git
cd bug-playwright-button-click/
npm ci
npx playwright install --with-deps
npx playwright test
