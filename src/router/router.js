import express from "express";

const ROUTES = express.Router();

ROUTES.get("/" , (req, res) => {
    console.log("Accept Logger :: Requset Webpaege")
    res.render("index");
});

ROUTES.get("/intro" , (req, res) => {
    console.log("Accept Logger :: Requset Webpaege")
    res.render("intro");
});

ROUTES.get("/about" , (req, res) => {
    console.log("Accept Logger :: Requset Webpaege")
    res.render("about");
});

export default ROUTES