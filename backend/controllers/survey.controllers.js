
const Survey = require("../models/survey.model");

const addToSurvey = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const survey = await Survey.create({
      title,
      description,
        questions
    });
    res.status(200).send({ survey });
  } catch (error) {
    res.status(500).send({ error });
  }
 
};

const getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).send({ surveys });
  } catch (error) {
    res.status(500).send({ error });
  }
 
};

const getSurveyById = async (req, res) => {
  const id = req.params.id;
  try {
    const survey = await Survey.find({_id:id});
    res.status(200).send({ survey });
  } catch (error) {
    res.status(500).send({ error });
  }
 
};

const updateSurveyById = (req, res) => {
  const id = req.params.id;
  const data = req.body;
 
};

const deleteSurveyById = (req, res) => {
  const id = req.params.id;
 
};

module.exports = {
    addToSurvey,
    getAllSurveys,
    getSurveyById,
  updateSurveyById,
  deleteSurveyById,
};
