const studentexam = require("../database/examsschema");

const recivedresult = async (req, res) => {
    try {
        const answers = req.body;
        console.log("Received Answers:", answers);

        // Fetch all questions from the database, excluding unnecessary fields
        const questions = await studentexam.find({}, "-__v -_id");

        let score = 0;

        // Loop through each question and compare answers
        questions.forEach((question, index) => {
            
            const correctAnswer = question.answer.find(ans => ans.isCorrect === true); // Find the correct answer

            if (!correctAnswer) {
                console.warn(`No correct answer found for question ${index + 1}`);
                return;
            }

            // Extract student's answer
            const studentAnswerObj = answers.theanswer[index]; // Assuming answers are indexed correctly
            if (!studentAnswerObj) {
                console.warn(`No answer provided for question ${index + 1}`);
                return;
            }

            const studentChoice = studentAnswerObj.choice; // Extract student's selected choice



            // Compare student's choice with the correct answer
            if (studentChoice === correctAnswer.text) {
                score++;
            }
        });

        console.log("Final Score:", score);
        
        // Send result after processing
        res.status(200).json({ response: "Result received successfully", score });

    } catch (error) {
        console.error("Error processing answers:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = recivedresult;
