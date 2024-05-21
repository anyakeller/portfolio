# Portfolio

My portfolio/website built using the React framework

## Structure 

### Adding a Project
Projects automatically populate. 
- Add project title, description, etc. to /projects.json
- Images
  - Place in directory /project-media/\[project_name]
  - Crop images to 164:128
  - Minify image

## Notes to Self:
TODO: 
- Project View
  - ~~Make dedicated view for project details~~
  - Add image carousel to project cards instead of detail view
    - ~~Get carousel to stop resizing everything when the image changes~~
    - Implement autocropping to prevent the above
  - Get rid of link click propagation to parent tile
  - Implement the ability to have inline photos in the project detail view
  - Add category/tag-based filtering
  - Redo layout because it's confusing and distressing
  - I'm distressing
  - I'm distressed
- ~~get rid of router dependencies~~
- Expand website
  - Add back multiple pages and routes
  - Add video support
  - ~~Cry~~


### I'm using npm not yarn

Node version: 14.x.x (because node-sass problems)

*Remember* to switch versions before trying to run: `nvm use 14`

To deploy to gh-pages: `npm run deploy`
