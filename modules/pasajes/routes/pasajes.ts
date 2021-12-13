import * as express from "express";
import * as pasajesSchema from "./../schemas/pasajes";

const router = express.Router();

router.get("/pasajes", async (req, res) => {
    try {
        console.log("Entre a pasajesssssss!!!!");
        let pasajes = await pasajesSchema.pasajes.find();
        console.log("Pasaje Registrado", pasajes);
        return res.status(200).send({ status: "success", data: pasajes });
    } catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "Error", data: err });
    }
});

router.post("/pasajes", async (req, res) => {
    try {
        console.log("Pasajesssssss POSTTTTTTT!!!!");
        const newPasaje = req.body;
        const pasajes = new pasajesSchema.pasajes(newPasaje);
        const pasajeNuevo = await pasajes.save();
        console.log("Pasaje agregado", pasajeNuevo);
        return res.status(200).send({ status: "success", data: pasajeNuevo });
    } catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "Error", data: err });
    }
});

router.put("/pasaje/:id", async (req, res) => {
    try {
        const pasajeUpdate = req.body;
        const idPasaje = req.params.id;
        const pasajetUpdated = await pasajesSchema.pasajes.findByIdAndUpdate(
            idPasaje,
            pasajeUpdate,
            { new: true }
        );
        console.log("Pasaje modificado", pasajetUpdated);
        return res.status(200).send({ status: "success", data: pasajetUpdated });
    } catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "Error", data: err });
    }
});

router.delete("/pasaje/:id", async (req, res) => {
    try {
        const pasajeDelete = req.body;
        const idPasaje = req.params.id;
        const pasajeDeleted = await pasajesSchema.pasajes.findByIdAndDelete(
            idPasaje,
            pasajeDelete
        );
        console.log("Pasaje Borrado", pasajeDeleted);
        return res.status(200).send({ status: "success", data: pasajeDeleted });
    } catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "error", data: err });
    }
});


export = router;