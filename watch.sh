watchman watch-del-all
watchman watch-project ./
watchman -- trigger ./ jsfiles '**/*.js' -- ./node_modules/.bin/webpack -d
