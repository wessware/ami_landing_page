

exports.homepage = async(req, res) => {
    const locals = {
        title: "Asgard Multiconcept International",
        description: "A cross-border company for all your technological needs"
    }

    res.render("index", {
        locals,
        layout: "../views/layouts/front-page"
    })
    
}
exports.about = async(req, res) => {
    const locals = {
        title: "About - NodeJS Notes Application",
        description: "Notes display Node Application"
    }

    res.render("about", locals)
}