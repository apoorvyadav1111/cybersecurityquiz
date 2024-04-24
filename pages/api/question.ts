import { NextApiRequest, NextApiResponse } from 'next';
import questions from '@/data/questions.json';

export default async(req: NextApiRequest, res: NextApiResponse) => {
    const questionlist = questions["quiz"];
    // select 10 unique random questions
    const arr = Array.from({length: questionlist.length}, (_, i) => i);
    // random shuffle arr
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const selectedQuestions = arr.slice(0, 10);
    const response = selectedQuestions.map((idx) => {
        const question = questionlist[idx];
        return {
            question: question.question,
            options: question.options,
            answer: question.answer
        };
    }
    );
    res.status(200).json(response);
}
