const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  //  New Category Request Body
  // {
  //   category_name: "Jewelry"
  // }
  try {
    const newEntry = await Category.create(req.body);
    res.status(200).json(newEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((category) => {
        res.status(200).json(category)
      });
  } catch (err) {
    res.status(400).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
