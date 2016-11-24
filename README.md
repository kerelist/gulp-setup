# Gulp Setup - Import to any project

## NPM & GULP

###Set configurations (do not change these unless necessary or agreed upon by a team)
`.editorconfig` (see installation additional info, bottom)
works with your editor to maintain formatting standards

`gulpfile.js`
base installation of gulp - here, recurses through the gulp folder to find configuration and tasks

###Stable configurations (will work as-is but able to be expanded upon)

`.eslintignore`

`.eslintrc`

###TO DO: Editable configurations (must edit to start project, see #4 below)
`gulp/config.js`

###Getting Started: The Baseline
1. Open a Terminal or Command Prompt

2. Navigate (`cd`) to the root folder of your project

3. Enter `npm install`, hit enter, wait for process to complete (may take a few mins)

Running into errors? You must have node.js and npm (usually installed with node.js) on your computer to proceed. Still having problems? Compare version numbers with someone who has the setup working.

4. Navigate to the file `config.js` in the gulp folder (path `[project root]/gulp/config.js`).

5. Change configuration paths to match those in your project. If you haven’t added any FED files yet (css, js, etc), do that first. There are suggested formats included in the comments of the config file.

6. Test out the commands! There is a listing in this `README`, below.

###[Gulp](http://gulpjs.com/)
`v3.9.0`; sass compiled with `node-sass`, requires npm > 3.7.5

__installation__
`npm install`

__tasks__
all held in the `gulp/tasks` folder.

__config__
held in `gulp/config.js`

__useful combined tasks:__

`gulp dev`: clean, lint, sass, concat

`gulp`: (default) dev, watch

`gulp build`: clean, lint, uglify, compress; to be attached to qa/prod build engine process

`imagemin`: rastermin (jpg png gif lossless), svgmin (svgo); only minifies (no svg sprites), must have images in a `/src/` folder within main images folder of project

`svg-sprites`: svg-prep, svg-symbol; creates svg sprites, consult config & task in `tasks/svg.js` for further guidance

__notes:__ `[project]/[images]/src` to be added to `.gitignore`
