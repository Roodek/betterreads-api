import express from "express";

const router = express.Router();

router.get("/search", (req,res)=>{
	res.json({
		books: [
			{
				goodreadsId: 1,
				title: "1984",
				authors: "Orwell",
				covers:[
					"https://images.gr-assets.com/books/1348990566l/5470.jpg"
				],
				pages: 198
			},
			{
				goodreadsId: 2,
				title: "Three men in a Boat",
				authors: "Jerome K. Jerome",
				covers:[
					"https://images.gr-assets.com/books/13927916561/4921.jpg"
				],
				pages: 256
			}
		]
	});
});

export default router;