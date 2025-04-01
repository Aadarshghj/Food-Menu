const express = require("express");
const Menu = require("../model/menuModel");
const router = express.Router();

// Create a new menu
router.post("/menus", async (req, res) => {
    try {
        const { name, description } = req.body;
        const menu = new Menu({ name, description });
        await menu.save();
        res.status(201).json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add an item to a menu
router.post("/menus/:menuId/items", async (req, res) => {
    try {
        const { menuId } = req.params;
        const { name, description, price } = req.body;
        const menu = await Menu.findById(menuId);

        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        menu.items.push({ name, description, price });
        await menu.save();
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all menus
router.get("/menus", async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single menu by ID
router.get("/menus/:id", async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).json({ message: "Menu not found" });
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a menu
router.delete("/menus/:id", async (req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.json({ message: "Menu deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
