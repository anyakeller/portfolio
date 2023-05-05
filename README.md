# Portfolio

My portfolio/website built using the React framework

## Structure 

### Adding a Project
Projects automatically populate. 
- Add project title, description, etc. to /projects.json
- Add images and other files to /project-media

## Notes to Self:
TODO: 
- Redo project view layout
- ~~Make dedicated view for project details~~
- ~~get rid of router dependencies~~
- Add image carousel to project cards instead of detail view
  - Get carousel to stop resizing everything when the image changes
- Get rid of link click propogation to parent tile
- Implement the ability to have inline photos in the project detail view


### I'm using npm not yarn

Node version: 14.x.x (because node-sass problems)

*Remember* to switch versions before trying to run: `nvm use 14`

To deploy to gh-pages: `npm run deploy`
