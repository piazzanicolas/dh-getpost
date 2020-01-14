const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products',{productos: products, toThousand});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail', {productos: products, toThousand, productID: req.params.productId});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form', {productos: products});
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		let theProduct = products.find(oneProduct => oneProduct.id == req.params.productId);
		res.render('product-edit-form', {product: theProduct});
	},
	// Update - Method to update
	update: (req, res) => {
		let productAct = {
			id: req.params.productId,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description
		}

		res.render('detail', {productos: products, toThousand, productID: req.params.productId});
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;