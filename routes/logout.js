const express = require("express");
const router = express.Router();

// Endpoint pour effectuer le logout
router.post("/", (req, res) => {
  // Vous pouvez simplement envoyer une réponse vide pour déconnecter l'utilisateur
  res.status(204).send();
});

module.exports = router;
