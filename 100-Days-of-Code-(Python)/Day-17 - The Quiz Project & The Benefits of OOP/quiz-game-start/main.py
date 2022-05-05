from question_model import Question
from quiz_brain import QuizBrain
from data import question_data

question_bank = [Question(q_text=question["question"], q_answer=question["correct_answer"]) for question in question_data]


quiz = QuizBrain(question_bank)

while quiz.still_has_questions():
    quiz.next_question()

print("You've completed the quiz")
print(f"You final score was: {quiz.score}/{len(question_bank)}")
