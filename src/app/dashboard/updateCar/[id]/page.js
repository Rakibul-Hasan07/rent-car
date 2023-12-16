'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UpdateCar = ({ params }) => {
    const id = params.id;

    const [selectedImages, setSelectedImages] = useState([]);

    const [isAcAvailabe, setIsAcAvailabe] = useState(false);
    const [isAcWorking, setIsAcWorking] = useState(false);
    const [isBlutooth, setIsBlutooth] = useState(false);
    const [isBackupCamera, setIsBackupCamera] = useState(false);

    const [updateData, setUpdateData] = useState([])
    const { _id, acAvailabe, acWorking, backupCamera, blutooth,
        bodyType, brandName, carColor, carConditon, carDescription,
        carEngineCapacity, carFuelType, carMaximumRentalDays, carMinimumRentalDays,
        carModelName, carNumberOfDoors, carSeatingCapacity, carTransmission, carYear,
        rentPricePerDay, phoneNo, email } = updateData;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/car/get-car/${id}`)
            setUpdateData(response?.data?.data)
        }
        fetchData();
    }, [id])

    const handleImageSelection = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages([...selectedImages, ...files]);
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const brandName = e.target.brandName.value;
        const carModelName = e.target.carModelName.value;
        const bodyType = e.target.bodyType.value;
        const carYear = e.target.year.value;
        const carTransmission = e.target.carTransmission.value;
        const carEngineCapacity = e.target.carEngineCapacity.value;
        const carFuelType = e.target.carFuelType.value;
        const carSeatingCapacity = e.target.carSeatingCapacity.value;
        const carNumberOfDoors = e.target.carNumberOfDoors.value;
        const carMinimumRentalDays = e.target.carMinimumRentalDays.value;
        const carMaximumRentalDays = e.target.carMaximumRentalDays.value;
        const carColor = e.target.carColor.value;
        const carConditon = e.target.carConditon.value;
        const phoneNo = e.target.phoneNo.value;
        const email = e.target.email.value;
        const rentPricePerDay = e.target.rentPricePerDay.value;
        const carDescription = e.target.message.value;

        try {
            const formDataArray = selectedImages.map((image, index) => {
                const formData = new FormData();
                formData.append("image", image);
                formData.append("name", `Image ${index + 1}`);
                return formData;
            });

            const uploadPromises = formDataArray.map((formData) =>
                axios.post(
                    `https://api.imgbb.com/1/upload?key=0908d2a66add35b8bb259f5e0708b76d`,
                    formData
                )
            );

            const responses = await Promise.all(uploadPromises);
            const urls = responses.map((response) => response.data.data.url);

            const carUpdateData = {
                images: urls,
                brandName,
                carModelName,
                bodyType,
                carYear,
                carTransmission,
                carEngineCapacity,
                carFuelType,
                carSeatingCapacity,
                carNumberOfDoors,
                carMaximumRentalDays,
                carMinimumRentalDays,
                carColor,
                carConditon,
                phoneNo,
                email,
                rentPricePerDay,
                carDescription,
                acAvailabe: isAcAvailabe,
                acWorking: isAcWorking,
                blutooth: isBlutooth,
                backupCamera: isBackupCamera

            };
            const response = await axios.put(`/api/car/update-car/${id}`, carUpdateData)
                .then((response) => {
                    if (response.status = 200) {
                        toast.success('Car Update Successfully')
                    }
                })
                .catch((error) => {
                    toast.error(error.message)
                })
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="bg-white px-4 py-10 sm:py-32 lg:px-6">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Update Your Car</h2>
            </div>
            <form onSubmit={handleUpdate} className="mx-auto mt-10 max-w-xl sm:mt-20">
                <div>
                    <label htmlFor="file" className="block text-sm font-semibold leading-6 text-gray-900">
                        Upload Image
                    </label>
                    <div className="mt-2.5">
                        <input
                            onChange={handleImageSelection}
                            type="file"
                            name="file"
                            id="file"
                            multiple
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="brandName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Brand Name
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={brandName} name="brandName" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="brandName">
                                <option>Toyota</option>
                                <option>Lamborgini</option>
                                <option>Mercedes</option>
                                <option>Hundai</option>
                                <option>Rolls Royels</option>
                                <option>Ferrari</option>
                                <option>Rolls Royels</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carModelName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Car model name
                        </label>
                        <div className="mt-2.5">
                            <input
                                defaultValue={carModelName}
                                type="text"
                                name="carModelName"
                                id="carModelName"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="bodyType" className="block text-sm font-semibold leading-6 text-gray-900">
                            Body Type
                        </label>
                        <div className="mt-2.5">
                            <input
                                defaultValue={bodyType}
                                type="text"
                                name="bodyType"
                                id="bodyType"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="year" className="block text-sm font-semibold leading-6 text-gray-900">
                            Year
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carYear} name="year" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="year">
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carTransmission" className="block text-sm font-semibold leading-6 text-gray-900">
                            Transmission
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carTransmission} name="carTransmission" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="carTransmission">
                                <option>Automatic</option>
                                <option>Manual</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carEngineCapacity" className="block text-sm font-semibold leading-6 text-gray-900">
                            Engine Capacity
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carEngineCapacity} name="carEngineCapacity" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="carEngineCapacity">
                                <option>0 L</option>
                                <option>2 L</option>
                                <option>3 L</option>
                                <option>4 L</option>
                                <option>5 L</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carFuelType" className="block text-sm font-semibold leading-6 text-gray-900">
                            Fuel Type
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carFuelType} name="carFuelType" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="carFuelType">
                                <option>Gasoline</option>
                                <option>Oilline</option>

                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carSeatingCapacity" className="block text-sm font-semibold leading-6 text-gray-900">
                            Seating Capacity
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carSeatingCapacity} name="carSeatingCapacity" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="carSeatingCapacity">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carNumberOfDoors" className="block text-sm font-semibold leading-6 text-gray-900">
                            Number of Doors
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carNumberOfDoors} name="carNumberOfDoors" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="carNumberOfDoors">
                                <option>2</option>
                                <option>4</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carMinimumRentalDays" className="block text-sm font-semibold leading-6 text-gray-900">
                            Minimum Rental Days
                        </label>
                        <div className="mt-2.5">
                            <input
                                defaultValue={carMinimumRentalDays}
                                type="text"
                                name="carMinimumRentalDays"
                                id="carMinimumRentalDays"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carMaximumRentalDays" className="block text-sm font-semibold leading-6 text-gray-900">
                            Maximum Rental Days
                        </label>
                        <div className="mt-2.5">
                            <input
                                defaultValue={carMaximumRentalDays}
                                type="text"
                                name="carMaximumRentalDays"
                                id="carMaximumRentalDays"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="rentPricePerDay" className="block text-sm font-semibold leading-6 text-gray-900">
                            Rental Price Per Day
                        </label>
                        <div className="mt-2.5">
                            <input
                                defaultValue={rentPricePerDay}
                                type="text"
                                name="rentPricePerDay"
                                id="rentPricePerDay"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carColor" className="block text-sm font-semibold leading-6 text-gray-900">
                            Color
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carColor} name="carColor" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="carColor">
                                <option>Black</option>
                                <option>Red</option>
                                <option>Silver</option>
                                <option>Gray</option>
                                <option>White</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="carConditon" className="block text-sm font-semibold leading-6 text-gray-900">
                            Car Conditon
                        </label>
                        <div className="relative mt-2.5">
                            <select defaultValue={carConditon} name="carConditon" className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 
                            rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="carConditon">
                                <option>Excelent</option>
                                <option>Medium</option>
                                <option>New Car</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phoneNo" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone No
                        </label>
                        <div className="mt-2.5">
                            <input
                                defaultValue={phoneNo}
                                type="text"
                                name="phoneNo"
                                id="phoneNo"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                defaultValue={email}
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                        {/* <!-- Remember me checkbox --> */}
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                                onClick={() => setIsAcAvailabe(!isAcAvailabe)}
                                name='acAvailabe'
                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-black outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="acAvailabe" />
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                htmlFor="acAvailabe">
                                AC Availabe
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                        {/* <!-- Remember me checkbox --> */}
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                                onClick={() => setIsAcWorking(!isAcWorking)}
                                name='acWorking'
                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-black outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="acWorking" />
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                htmlFor="acWorking">
                                AC Working
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                        {/* <!-- Remember me checkbox --> */}
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                                onClick={() => setIsBlutooth(!isBlutooth)}
                                name='blutooth'
                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-black outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="blutooth" />
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                htmlFor="blutooth">
                                Blutooth
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                        {/* <!-- Remember me checkbox --> */}
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                                onClick={() => setIsBackupCamera(!isBackupCamera)}
                                name='backupCamera'
                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-black outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                value=""
                                id="backupCamera" />
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                htmlFor="backupCamera">
                                Backup Camera
                            </label>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                defaultValue={carDescription}
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Update Car
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCar;