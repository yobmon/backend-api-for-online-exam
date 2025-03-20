const studentexam = require("../database/examsschema");

const examsent = async (req, res) => {
    try {

        const { questions } = req.body;  
        console.log(questions);

     
        for (let question of questions) {
            const newQuestion = await new studentexam({
                question: question.question, 
                answer: question.answer
            });

            await newQuestion.save().then(() => {
                console.log("Question saved successfully");
            }); 
        }

        res.status(201).json({ message: "Questions saved successfully" });
    } catch (error) {
        console.error("Error saving questions:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = examsent;
