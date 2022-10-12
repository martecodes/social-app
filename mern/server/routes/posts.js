import express  from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send({message: "this works!"});
});

export default router;