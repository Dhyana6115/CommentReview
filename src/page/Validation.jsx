import { useForm } from "react-hook-form";

const FormValidation = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    function signup(data) {
        console.log(data);
        alert("Thank You for registration");
        reset()
    }
    return (
        <>
            <form method="post" onSubmit={handleSubmit(signup)} className=" col-lg-6 mx-auto my-5 p-5 shadow bg-dark">
                <h1 className="text-center text-light">Sign-Up Form</h1>
                <div className="mt-4">
                    <input type="text" className="form-control" placeholder="Enter Your UserName" {...register('username', {
                        required: {
                            value: true, message: "Please enter UserName"
                        }, minLength: { value: 4, message: "Minimum 4 characters" },
                        maxLength: { value: 25, message: "Maximum 25 characters" }, pattern: {
                            value: /^[A-Za-z]/,
                            message: "Only characters are allowed"
                        }
                    })} />
                    <p className="text-danger">{errors?.username?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="email" className="form-control" placeholder="Enter Your Email" {...register('email', {
                        required: {
                            value: true,
                            message: "Please enter Email"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/,
                            message: "Invalid email address"
                        }
                    })} />
                    <p className="text-danger">{errors?.email?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="password" className="form-control" placeholder="Enter  Your Password" {...register('password', {
                        required:
                        {
                            value: true,
                            message: "Please enter Your Password"
                        },
                        minLength:
                        {
                            value: 6,
                            message: "Minimum 6 characters"
                        }
                    })} />
                    <p className="text-danger">{errors?.password?.message}</p>
                </div>

                <div className="mt-4 text-light">
                    <h4 className="text-light">Select gender</h4>
                    <input type="radio" value="Male" {...register('gender', {
                        required:
                        {
                            value: true,
                            message: "Please select Gender"
                        }
                    })} />
                    <label>Male</label>
                    <input type="radio" value="Female" {...register('gender', {
                        required:
                        {
                            value: true,
                            message: "Please select Gender"
                        }
                    })} />
                    <label>Female</label>
                    <input type="radio" value="Other" {...register('gender', {
                        required:
                        {
                            value: true,
                            message: "Please select Gender"
                        }
                    })} />
                    <label>Other</label>
                    <p className="text-danger">{errors?.gender?.message}</p>
                </div>

                <div className="mt-4 text-light">
                    <select {...register('course', {
                        required:
                        {
                            value: true,
                            message: "Please select Course"
                        }
                    })}
                        className="form-select">
                        <option value="">Select City</option>
                        <option value="Ahemdabad">Ahemdabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Vadodra">Vadodra</option>
                        <option value="Junagadh">Junagadh</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                        <option value="other">other</option>
                    </select>
                    <p className="text-danger">{errors?.course?.message}</p>
                </div>

                <div className="mt-4 text-light">
                    <textarea className="form-control" placeholder="Enter your message" {...register('message', {
                        required:
                        {
                            value: true,
                            message: "Message is required"
                        },
                        maxLength:
                        {
                            value: 200,
                            message: "Maximum 200 characters"
                        }
                    })}>

                    </textarea>
                    <p className="text-danger">{errors?.message?.message}</p>
                </div>

                <div className="mt-4 text-light">
                    <h4 className="text-light"> Select Hobbies</h4>
                    <input type="checkbox" value="" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Cooking</label>
                    <input type="checkbox" value="Cooking" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Gym</label>
                    <input type="checkbox" value="Gym" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Dance</label>
                    <input type="checkbox" value="Dance" {...register('hobbies', {
                        required:
                        {
                            value: true,
                            message: "Please select Hobbies"
                        }
                    })} />
                    <label>Travelling</label>
                    <p className="text-danger">{errors?.hobbies?.message}</p>
                </div>

                <div className="mt-4">
                    <button className="btn btn-outline-warning">Submit</button>
                </div>
            </form>

        </>
    )
}

export default FormValidation