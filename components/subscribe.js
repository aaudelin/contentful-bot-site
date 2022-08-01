import {useState} from "react";
import {useForm} from "react-hook-form";
import {Audio, Circles, ThreeDots} from "react-loader-spinner";

export default function Subscribe() {
    const [formSubmited, setFormSubmited] = useState(false)
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [loader, setLoader] = useState(false);

    const subscribe = async (data) => {
        setLoader(true);
        try {
            const res = await fetch('/api/subscribe', {
                body: JSON.stringify({
                    email: data.email,
                    need: data.need,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });
            await fetch('/formValidated', {
                method: 'GET'
            });
        } catch (exception) {
            console.error("Impossible to call mailchimp", exception);
        }
        setLoader(false)
        setFormSubmited(true)
    };

    return (
        <section
            className="text-slate-800 text-center flex-col flex items-center md:justify-between">
            <h2 className="text-rose-800 text-4xl">
                Join the waiting list !
            </h2>
            <h4 className="px-4 mt-5 text-slate-800 text-sm lg:text-l">
                Contentful Bot is still in progress. We are working hard to offer you the best experience.
            </h4>
            <div className="px-4 text-slate-800 text-sm lg:text-l">
                When you subscribe you accept to be notified of our public launch !
            </div>
            {!formSubmited ?
                <form
                    className="w-full max-w-2xl mt-10 flex flex-col text-left border-2 border-slate-50 border-opacity-20 p-5 rounded"
                    onSubmit={handleSubmit(subscribe)}>
                    <label className="font-medium" htmlFor="email">Your email</label>
                    <input
                        className="p-2 rounded-md focus-visible:outline-slate-400 outline-1"
                        name="email"
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                        type="email"
                        placeholder="lisa@myproject.com"/>
                    <label className="mt-4 font-medium" htmlFor="need">Give us some context</label>
                    <textarea
                        className="p-2 rounded-md focus-visible:outline-slate-400 outline-1"
                        rows={4}
                        name="need"
                        placeholder="Share with us any information about how and why you want to use Contentful Bot"
                        {...register("need")}/>

                    <button
                        className="flex justify-center transition-all ease-in-out duration-300 border-white border-2 hover:border-slate-400 ml-auto w-56 h-12 py-2 mt-4 rounded bg-white "
                        type="submit">
                            {loader ? <ThreeDots
                                height="30"
                                width="56"
                                color='#BE123C'
                                ariaLabel='loading'
                            /> : "Submit"}
                    </button>
                </form>
                : <div
                    className="mt-10 text-xl text-rose-800 border-2 border-slate-50 border-opacity-20 p-5 rounded">Thank
                    you ! You will soon be notified.</div>
            }
        </section>
    )
}
