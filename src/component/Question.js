import {Field} from "formik";
import Form from "react-bootstrap/Form";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import answer from "../redux/answer";
import {addQuestion} from "../service/quesiton.service";


export default function Question(){
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const question = useSelector(state => {
        return state.questions.questions
    })
    useEffect(() => {
        dispatch(addQuestion());
    }, [dispatch]);
    return(
        <>
            <Form>
                <div>
                    <label htmlFor="disabledSelect">Question</label>
                    <Field name="question_name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                        <span>Add Question</span>
                    </button>
                </div>
            </Form>
        </>
    )
}

// import AnswerField from "@/src/components/AnswerField";
// import { type NextPage } from "next";
// import { useRef, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { PlusIcon } from "@heroicons/react/24/solid";
// import { trpc } from "@/src/utils/trpc";
//
// export type Answer = {
//     id: string;
//     content: string;
//     status: boolean;
// };
//
// const CreateQuestionPage: NextPage = () => {
//     const {
//         data: categories,
//         isLoading,
//         isError,
//     } = trpc.question.getCategory.useQuery();
//     const { mutate } = trpc.question.create.useMutation();
//     const contentRef = useRef<HTMLTextAreaElement>(null);
//     const categoryRef = useRef<HTMLSelectElement>(null);
//     const [answers, setAnswers] = useState<Answer[]>([
//         {
//             id: uuidv4(),
//             content: "",
//             status: false,
//         },
//         {
//             id: uuidv4(),
//             content: "",
//             status: false,
//         },
//     ]);
//
//     const handleAnswerChange = (id: string) => {
//         return (values: string) => {
//             setAnswers((prev) => {
//                 return prev.map((answer) => {
//                     if (answer.id === id) {
//                         return {
//                             id: answer.id,
//                             content: values,
//                             status: answer.status,
//                         };
//                     }
//                     return answer;
//                 });
//             });
//         };
//     };
//
//     const handleCorrectCheck = (id: string) => {
//         return () => {
//             setAnswers((prev) => {
//                 return prev.map((answer) => {
//                     if (answer.id === id) {
//                         return {
//                             id: answer.id,
//                             content: answer.content,
//                             status: true,
//                         };
//                     }
//                     return {
//                         id: answer.id,
//                         content: answer.content,
//                         status: false,
//                     };
//                 });
//             });
//         };
//     };
//
//     const removeAnswer = (id: string) => {
//         return () => {
//             setAnswers((prev) => {
//                 return prev.filter((answer) => answer.id !== id);
//             });
//         };
//     };
//
//     if (isLoading || isError) return <div>Loading</div>;
//
//     return (
//         <div className="flex w-full justify-center">
//             <form
//                 className="flex w-96 flex-col gap-4"
//                 onSubmit={(e) => {
//                     e.preventDefault();
//                     if (categoryRef.current?.value && contentRef.current?.value) {
//                         mutate({
//                             category: categoryRef.current.value,
//                             answers,
//                             questionContent: contentRef.current.value,
//                         });
//                     }
//                 }}
//             >
//                 <h2>Create Question Form</h2>
//                 <label className="flex flex-col text-sm">
//                     Question content
//                     <textarea
//                         className="resize-none"
//                         rows={4}
//                         cols={20}
//                         ref={contentRef}
//                         required
//                     ></textarea>
//                 </label>
//
//                 <label className="flex flex-col text-sm">
//                     Category
//                     <select ref={categoryRef}>
//                         {categories.map((category) => {
//                             return (
//                                 <option key={category.id} value={category.id}>
//                                     {category.name}
//                                 </option>
//                             );
//                         })}
//                     </select>
//                 </label>
//
//                 <div className="text-sm">
//                     <p>Answers (mark the correct answers)</p>
//                     {answers.map((answer, i) => {
//                         return (
//                             <AnswerField
//                                 key={answer.id}
//                                 handleAnswerChange={handleAnswerChange(answer.id)}
//                                 handleCorrectCheck={handleCorrectCheck(answer.id)}
//                                 removeAnswer={removeAnswer(answer.id)}
//                                 removable={i > 1}
//                             />
//                         );
//                     })}
//                 </div>
//
//                 <button
//                     type="button"
//                     className="w-full border border-gray-800 py-1"
//                     onClick={() => {
//                         setAnswers((prev) => {
//                             return [
//                                 ...prev,
//                                 {
//                                     id: uuidv4(),
//                                     content: "",
//                                     status: false,
//                                 },
//                             ];
//                         });
//                     }}
//                 >
//                     <PlusIcon className="mx-auto h-5 w-5" />
//                 </button>
//
//                 <button
//                     type="submit"
//                     className="mx-auto rounded-lg bg-blue-600 py-2 px-4 text-blue-200"
//                 >
//                     Submit question
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default CreateQuestionPage;