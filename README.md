# Portfolio

My portfolio/website built using the React framework

## Usage 

### Command Line

#### Running Locally

Node version: 14.x.x (because node-sass problems)

Switch to correct node version before running!!!

`nvm use 14`

### Deploy to github pages

`npm run deploy`

### Adding a Project
Projects automatically populate. 
#### Adding Project Info 

Add project title, description, etc. as an object to the list in /projects.json

**Project Entry Template**
``` json
{
  "project_name": "Project name",
  "image_folder_path": "dir_name/",
  "image_files": [
    "image1.ext",
    "image2.ext"
  ],
  "inProgress": false,
  "dates": "StartMonth Year to EndMonth Year",
  "info": {
    "tags": ["SolidWorks", "machining", "coursework","etc."],
    "description": {
      "brief": "1-2 sentences",
      "verbose": [
        "Paragraph 1", 
        "Paragraph 2", 
        {"title":"paragraph with title","text":"paragraph text"}, 
        "Etc..."]
    }
  },
  "links": [
    {
      "source": "Link1 name",
      "url": "/"
    },
        {
      "source": "Link2 name",
      "url": "/"
    }
  ]
}
```

#### Adding Project Images
  - Place in directory /project-media/\[project_name]
  - Crop images to 164:128
  - Minify image

## Notes to Self:
TODO: 
- Project View
  - ~~Make dedicated view for project details~~
  - ~~Add image carousel to project cards instead of detail view~~
    - ~~Get carousel to stop resizing everything when the image changes~~
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
