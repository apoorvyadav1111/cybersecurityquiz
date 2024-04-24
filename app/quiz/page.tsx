"use client";
import { ReviewQuestions } from "@/components/review-questions";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup , RadioGroupItem} from "@/components/ui/radio-group";
import { RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface QuizData {
    question: string;
    options: string[];
    answer: string;
}

const Home = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [quizData, setQuizData] = useState([] as QuizData[]);
    const [idx, setIdx] = useState(0);
    const [timer, setTimer] = useState(0);
    const MAX_DURATION = 60;
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [reviewQuestions, setReviewQuestions] = useState([] as QuizData[]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }
    , [timer]);

    useEffect(() => {
        // fetch quiz data
        fetch("/api/question")
            .then((response) => response.json())
            .then((data) => {
                setQuizData(data);
                setTimeout(() => {
                    setIsLoading(false);
                },200);
            })
            .catch((error) => {
                console.error("Error fetching quiz data:", error);
            })
    }, []);  

    useEffect(() => {
        if (timer === MAX_DURATION) {
            setTimer(0);
            setIdx((prev) => prev + 1);
        }
    }, [timer]);
    

    if (isLoading) {
        return (
        <div className="min-h-screen flex items-center justify-center"> 
            <Spinner size="lg" />
        </div>
        );
    }

    const nextQuestion = () => {
        if (idx === 9) {
            setIsFinished(true);
            return;
        }
        setIdx((prev) => prev + 1);
        setTimer(0);
    }

    const onClick = () => {
        if (selectedOption === quizData[idx].answer) {
            setScore((prev) => prev + 1);
        }else{
            setReviewQuestions((prev) => [...prev, quizData[idx]]);
        }
        setSelectedOption("");
        nextQuestion();
    }

    const onValueChange = (value: string) => {
        setSelectedOption(value);
    }

    const goHome = () => {
        router.push("/");
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {
                isFinished ? (
                    <div className="flex flex-col items-center justify-center space-y-4 translate-y-[-10%]">
                        <h2 className="text-4xl font-bold">Quiz Completed!</h2>
                        <h3 className="text-2xl font-bold">Your score: {score}/10</h3>
                        <div className="flex flex-row space-x-4">
                        <Button 
                            className="text-black dark:text-cyan-300 hover:text-black hover:bg-white dark:hover:text-cyan-600" variant="ghost"
                            onClick={() => {
                                setIdx(0);
                                setTimer(0);
                                setScore(0);
                                setIsFinished(false);
                            }}
                        >
                            Restart
                            <RotateCcw size={24} className="ml-2"/>
                        </Button>
                        <Button
                            className="text-black dark:text-cyan-300 hover:text-black hover:bg-white dark:hover:text-cyan-600" variant="ghost"
                            onClick={() => {goHome()}}
                        >
                            Go Home
                        </Button>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <ReviewQuestions questions={reviewQuestions} />
                        </div>
                    </div>
                ) : (
            <div className="flex flex-col justify-between translate-y-[-10%]"> 
                <div className="flex flex-row items-center justify-center space-x-4">
                    <h4 className="font-bold">Time: {timer}</h4>
                    <h4 className="font-bold">Score: {score}/10</h4>
                    <h4 className="font-bold">Question: {idx + 1}/10</h4>
                </div>
            <Progress value={timer} max={MAX_DURATION} className="h-1 m-1 bg-white dark:bg-cyan-600 "/>
            
                <Card className="w-[600px] min-w-[600px] min-h-[200px] max-h-[500px] text-2xl text-wrap max-w-[600px] bg-[#1f1f1f]  dark:bg-sky-800 p-8 m-2 pb-4">
                <h2 className="font-bold pb-4 text-yellow-500 dark:text-cyan-300">
                    {quizData[idx].question}
                </h2>
                {/* Radio buttons */}
                <RadioGroup onValueChange={onValueChange}>
                    {quizData[idx].options.map((option, idx) => (
                        <div className="flex flex-row space-x-3 space-y-4">
                            <div className="flex items-center space-x-3">
                                <RadioGroupItem value={option} key={idx} className="bg-slate-100"/>
                                <Label className="text-xl text-slate-200">{option}</Label>
                            </div>
                        </div>
                    ))}
                </RadioGroup>
                <div className="flex flex-row items-end justify-end">
                <Button 
                    className="text-white hover:text-black hover:bg-white dark:hover:text-cyan-600" variant="ghost"
                    onClick={() => onClick()}
                    >
                    {idx === 9? "Submit" : "Next"}
                </Button>
                </div>
            </Card>
            </div>
                )
            }
        </div>
    );
}

export default Home;
