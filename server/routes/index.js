const { Router } = require("express");

const FrontendRouter = Router();

FrontendRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Asgard Multiconcept International",
        description: "A cross-border company for all your technological needs",
        layout: "layouts/front-page"
    })
});

FrontendRouter.get("/about", (req, res) => {
    res.render("about", {
        title: "Asgard Multiconcept International",
        description: "A cross-border company for all your technological needs",
        layout: "layouts/front-page"
    })
});


FrontendRouter.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Asgard Multiconcept International",
        description: "A cross-border company for all your technological needs",
        layout: "layouts/front-page"
    })
});


module.exports = FrontendRouter

