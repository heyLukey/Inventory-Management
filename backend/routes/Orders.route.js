const router = require("express").Router();
const Order = require("../models/Orders.model");

// POST new order
router.post("/create", async (req, res) => {
  const order = new Order({
    description: req.body.description,
    deadline: req.body.deadline,
    quantity: req.body.quantity,
    title: req.body.title,
    todo: req.body.todo,
  });

  try {
    const saveOrder = await order.save();
    res.send(saveOrder);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// GET all orders
router.get("/all", async (req, res) => {
  try {
    const findOrders = await Order.find({ recycled: false });
    res.json(findOrders);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// GET all active orders
router.get("/active", async (req, res) => {
  try {
    const findActiveOrders = await Order.find({
      active: true,
      recycled: false,
    });
    res.json(findActiveOrders);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// GET all archived orders
router.get("/archived", async (req, res) => {
  try {
    const findArchivedOrders = await Order.find({
      active: false,
      recycled: false,
    });
    res.json(findArchivedOrders);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// GET all recycled orders
router.get("/recycled", async (req, res) => {
  try {
    const findRecycledOrders = await Order.find({ recycled: true });
    res.json(findRecycledOrders);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// GET specific order
router.get("/:orderID", async (req, res) => {
  try {
    const findOrderByID = await Order.findById(req.params.orderID);
    if (findOrderByID === null) {
      res.json({ message: "No such order exists" });
    } else {
      res.json(findOrderByID);
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// PATCH specific order {active}
router.patch("/status/:orderID", async (req, res) => {
  try {
    const patchOrderStatus = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { active: req.body.active } },
      { runValidators: true }
    );
    res.json(patchOrderStatus);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// PATCH specific order {recycled}
router.patch("/recycled/:orderID", async (req, res) => {
  try {
    const patchOrderRecycled = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { recycled: req.body.recycled } },
      { runValidators: true }
    );
    res.json(patchOrderRecycled);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// PATCH specific order {title}
router.patch("/title/:orderID", async (req, res) => {
  try {
    const patchOrderTitle = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { title: req.body.title } },
      { runValidators: true }
    );
    res.json(patchOrderTitle);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// PATCH specific order {description}
router.patch("/desc/:orderID", async (req, res) => {
  try {
    const patchOrderDesc = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { description: req.body.description } },
      { runValidators: true }
    );
    res.json(patchOrderDesc);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// PATCH specific order {todo}
router.patch("/todo/:orderID", async (req, res) => {
  try {
    const patchOrderToDo = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { todo: req.body.todo } },
      { runValidators: true }
    );
    res.json(patchOrderToDo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// PATCH specific order {quantity}
router.patch("/quantity/:orderID", async (req, res) => {
  try {
    const patchOrderQuantity = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { quantity: req.body.quantity } },
      { runValidators: true }
    );
    res.json(patchOrderQuantity);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// PATCH specific order {deadline}
router.patch("/deadline/:orderID", async (req, res) => {
  try {
    const patchOrderDeadline = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { deadline: req.body.deadline } },
      { runValidators: true }
    );
    res.json(patchOrderDeadline);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// DELETE specific order
router.delete("/delete/:orderID", async (req, res) => {
  try {
    const deleteOrderbyID = await Order.deleteOne({ _id: req.params.orderID });
    res.json(deleteOrderbyID);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
