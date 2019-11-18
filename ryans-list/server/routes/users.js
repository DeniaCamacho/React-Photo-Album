const router = require("express").Router()
const db = require("../db")

router.get("/", (req, res, next) => {
  const sql = `
  SELECT id, name 
  FROM categories 
  WHERE parent_id IS NULL;`

  db.query(sql, (err, results, fields) => {
    console.log(results)
    res.json(results)
  })
})
router.get("/sub", (req, res, next) => {
  const sql = `SELECT A.name AS name , B.slug AS sub, A.id 
  FROM categories A , categories B
  WHERE A.id = B.parent_id
  ORDER by A.id ;`

  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})
module.exports = router

// SELECT parent_id, slug
// FROM categories
