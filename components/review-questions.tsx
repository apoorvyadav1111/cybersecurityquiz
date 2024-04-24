import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { RotateCcw } from "lucide-react";
import { Card } from "./ui/card";

interface QuizData{
    question: string;
    options: string[];
    answer: string;

}

export const  ReviewQuestions = ({ questions }:{questions: QuizData[]}) => {
    return (
        <Carousel className="w-[600px] h-[200px] " >
            <CarouselPrevious>
                <RotateCcw size={24} />
            </CarouselPrevious>
            <CarouselContent>
                {questions.map((question, index) => (
                    <CarouselItem key={index}>
                        <Card className="text-2xl text-wrap bg-[#1f1f1f]  dark:bg-sky-800 p-8 m-2 pb-4">
                        <h2 className="font-bold pb-4 text-yellow-500 dark:text-cyan-300">
                            {question.question}
                        </h2>
                        <h2 className="font-bold pb-4 text-green-500">{question.answer}</h2>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext>
                <RotateCcw size={24} />
            </CarouselNext>
        </Carousel>
    );
}
