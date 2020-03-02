import { ensureDir, ensureFile } from "fs-extra"
import path from "path"

const createStructure = () => {
  if (process.argv.length < 3) {
    console.log("expected argument (path to your src folder)")
    return
  }

  const start = process.argv[2]

  // build actions structure
  ensureDir(path.join(start, "actions"))
    .then(() => {
      console.log("actions dir created")
    })
    .then(() => {
      // create index file
      ensureFile(path.join(start, "actions", "index.js")).then(() => {
        console.log("actions/index.js created")
      })
    })

  ensureDir(path.join(start, "reducers"))
    .then(() => {
      console.log("reducers dir created")
    })
    .then(() => {
      // create index file
      ensureFile(path.join(start, "reducers", "index.js")).then(() => {
        console.log("reducers/index.js created")
      })
    })

  ensureDir(path.join(start, "selectors"))
    .then(() => {
      console.log("selectors dir created")
    })
    .then(() => {
      // create index file
      ensureFile(path.join(start, "selectors", "index.js")).then(() => {
        console.log("selectors/index.js created")
      })
    })

  ensureDir(path.join(start, "views"))
    .then(() => {
      console.log("views dir created")
    })
    .then(() => {
      // create index file
      ensureFile(path.join(start, "views", "index.js")).then(() => {
        console.log("views/index.js created")
      })
    })

  ensureFile(path.join(start, "store.js")).then(() => {
    console.log("store.js created")
  })
}

createStructure()
