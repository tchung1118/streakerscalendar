watchman watch-del-all
watchman watch-project ./
watchman -- trigger ./ jsfiles '**/*.js' -- npm run build
