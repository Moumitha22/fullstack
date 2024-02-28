import { useState } from 'react'

const Personal = () => {

    const formValue = {
        firstname: 'Raj Narayanan',
        lastname: 'B',
        gender: 'Male',
        dob: '06/10/2003',
        Mail: '2003braj@gmail.com',
        Phone: '9025760240',
    };

    //   useEffect(() => {
    //     const keyvale = localStorage.getItem('loginDetails');
    //     const userid = JSON.parse(keyvale);
    //     const id = userid.userid;

    //     const token = localStorage.getItem('token');
    //     if(token !== null){
    //       axios.get('http://localhost:8080/user/clientprofile/'+id)
    //       .then(res => {
    //         setFormValues(res.data);
    //       })
    //       .catch(err => {
    //         window.alert(err);
    //       })
    //     }else{
    //       window.alert("Please Login");
    //       window.location.href = '/login';
    //     }
    //   }, []);

    const [formValues, setFormValues] = useState(formValue);
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setIsFormChanged(true);
    };

    const handleEditClick = () => {
        setIsEditClicked(true);
    };

    function handleSave() {
        // const keyvale = localStorage.getItem('loginDetails');
        // const userid = JSON.parse(keyvale);
        // const id = userid.userid;
        // const token = localStorage.getItem('token');
        // if(token !== null){
        //   await axios.put('http://localhost:8080/user/clientprofile/update/'+id, formValues)
        //   .then(res => {
        //     window.alert(res.data);
        //   })
        //   .catch(err => {
        //     window.alert(err);
        //   })
        // }
        // else{
        //   window.alert("Please Login");
        //   window.location.href = '/login';
        // }
        setIsFormChanged(false);
        setIsEditClicked(false);

    }

    return (
        <div>
            <div className="flex flex-col items-center justify-start bg-gradient-to-br w-full bg-sky-200">
                <h1 className=" mb-5 text-3xl font-semibold text-cyan-600 p-6">Personal Details</h1>
                <form className="flex flex-col gap-8 max-w-400px p-4 border border-gray-300 rounded bg-white shadow-md">
                    <div className="flex items-center space-x-4 ">
                        <strong className="font-bold p-2 items-start text-cyan-600">First Name</strong>
                        {isEditClicked ? (
                            <input
                                type="text"
                                name="firstname"
                                value={formValues.firstname}
                                onChange={handleInputChange}
                                className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded outline-none items-end text-cyan-600"
                            />
                        ) : (
                            <span className="p-2 text-cyan-600">{formValues.firstname}</span>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <strong className="font-bold w-24 p-2 text-cyan-600">Last Name</strong>
                        {isEditClicked ? (
                            <input
                                type="text"
                                name="lastname"
                                value={formValues.lastname}
                                onChange={handleInputChange}
                                className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded outline-none items-end text-cyan-600"
                            />
                        ) : (
                            <span className="text-cyan-600 p-2">{formValues.lastname}</span>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <strong className="font-bold w-24 p-2 text-cyan-600">Gender</strong>
                        {isEditClicked ? (
                            <input
                                type="text"
                                name="gender"
                                value={formValues.gender}
                                onChange={handleInputChange}
                                className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded outline-none items-end text-cyan-600"
                            />
                        ) : (
                            <span className="text-cyan-600 p-2">{formValues.gender}</span>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <strong className="font-bold w-24 p-2 text-cyan-600">Date of Birth</strong>
                        {isEditClicked ? (
                            <input
                                type="text"
                                name="dob"
                                value={formValues.dob}
                                onChange={handleInputChange}
                                className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded outline-none items-end text-cyan-600"
                            />
                        ) : (
                            <span className="text-cyan-600 p-2">{formValues.dob}</span>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <strong className="font-bold w-24 p-2 text-cyan-600">Mail</strong>
                        {isEditClicked ? (
                            <input
                                type="text"
                                name="Mail"
                                value={formValues.Mail}
                                onChange={handleInputChange}
                                className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded outline-none items-end text-cyan-600"
                            />
                        ) : (
                            <span className="text-cyan-600 p-2">{formValues.Mail}</span>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <strong className="font-bold w-24 p-2 text-cyan-600">Phone</strong>
                        {isEditClicked ? (
                            <input
                                type="text"
                                name="Phone"
                                value={formValues.Phone}
                                onChange={handleInputChange}
                                className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded outline-none items-end text-cyan-600"
                            />
                        ) : (
                            <span className="text-cyan-600 p-2">{formValues.Phone}</span>
                        )}
                    </div>
                </form>
                <br />
                <div className="flex justify-center mb-8">
                    {!isEditClicked && !isFormChanged && (
                        <button className="px-4 py-2 bg-white text-cyan-600 rounded" onClick={handleEditClick}>
                            Edit
                        </button>
                    )}
                    {isEditClicked && isFormChanged && (
                        <button className="px-4 py-2 bg-white text-cyan-600 rounded " onClick={handleSave}>
                            Save
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

};

export default Personal;