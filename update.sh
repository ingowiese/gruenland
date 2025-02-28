#!/bin/bash
echo feching data
# pnpm
export PNPM_HOME="/home/iwiese/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

cd ./gruenland
pnpm start
scp output/weather-data.html pansoft@genoa.dmz.pansoft.de:/var/www/html/gruenland.html
