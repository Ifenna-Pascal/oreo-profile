'use client'
import { poppins } from '@src/util/font'
import React, { useEffect, useState } from 'react'
import { Button, Input } from '..'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { SelectInput } from '../input/input';
import { addBooking } from '@src/db/method';
import ButtonLoader from '@src/util/loader';
import { toast } from 'react-toastify';

export function HeroContact() {
  const [isLoading, setIsLoading] = useState(false);
  interface IBooking {
    name: string;
    mobile: string;
    department: string;
    service: string;
    doctor: string;
  }

  const initialBooking = {
    name: '',
    mobile: '',
    department: '',
    service: '',
    doctor: ''
  }


  const bookingSchema = yup.object().shape({
    name: yup.string().required('name field is required'),
    mobile: yup.string().required('mobile number field is required'),
    department: yup.string().required('department field is required'),
    service: yup.string().required('service field is required'),
    doctor: yup.string().required('doctor field required')
  })

  const {
    values,
    errors,
    handleChange,
    resetForm,
    handleBlur,
    touched,
    handleSubmit,
  } = useFormik<IBooking>({
    initialValues: initialBooking,
    validationSchema: bookingSchema,
    onSubmit: () => {
      onSubmit();
    } 
  });

  const onSubmit = async() => {
    try {
      setIsLoading(true);
      console.log(values)
      const result = await addBooking(values)
      console.log(result, "res8lt")
      if(result) {
        setIsLoading(false)
        toast.success(`booking successfully made`)
      }
      resetForm()
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <div className='flex flex-col p-6 absolute -bottom-[280px] md:-bottom-[100px]  md:mb-0 shadow-md md:left-[13%] bg-white max-w-[94%] left-[3%] w-full md:centered-main-container rounded-[8px]  min-h-[186px]'>
     <p className={`text-[16px] mb-4  font-[400] tracking-[0.4px] font-300 text-gray-600  ${poppins.className} `}>Make Appointment</p>
    <form onSubmit={handleSubmit} className='md:grid flex flex-col grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-6'>
        <Input error={errors.name ? errors.name : ''} touched={touched.name} value={values.name} onBlur={handleBlur} onChange={handleChange} name='name' label='Enter Name' className='col-span-1 md:col-span-1' />
        <SelectInput error={errors.department ? errors.department : ''}  touched={touched.department}  value={values.department} onBlur={handleBlur} onChange={handleChange} name='department'  label='Enter Department'>
        <option  className='text-gray-600'  value="" disabled selected>Select A Department</option>
      
          <option  className='text-gray-600' value="laboratory Service">Laboratory Service</option>
          <option  className='text-gray-600' value="Blood Banking">Blood Banking</option>
          <option  className='text-gray-600' value="Radiology Services"> Radiology Services</option>
          <option  className='text-gray-600' value="Inpatient Services">Inpatient/Consultation Services</option>
        </SelectInput>
        <Input  error={errors.mobile ? errors.mobile : ''} touched={touched.mobile} value={values.mobile} onBlur={handleBlur} onChange={handleChange} name='mobile'  label='Enter Mobile' />
       
        <SelectInput  error={errors.doctor ? errors.doctor : ''}  touched={touched.doctor}  value={values.doctor} onBlur={handleBlur} onChange={handleChange} name='doctor'  label='Enter doctor'>
        <option  className='text-gray-600' value="" disabled selected>Select A Doctor</option>
          <option  className='text-gray-600' value="laboratory Service">Laboratory Service</option>
          <option  className='text-gray-600' value="Blood Banking">Blood Banking</option>
          <option  className='text-gray-600' value="Radiology Services"> Radiology Services</option>
          <option  className='text-gray-600' value="Inpatient Services">Inpatient/Consultation Services</option>
        </SelectInput>
        <SelectInput   error={errors.service   ? errors.service  : ''}  touched={touched.service } value={values.service} onBlur={handleBlur} onChange={handleChange} name='service'  label='Enter Service'>
        <option  className='text-gray-600' value="" disabled selected>Select A Service</option>
          <option  className='text-gray-600' value="laboratory Service">Laboratory Service</option>
          <option  className='text-gray-600' value="Blood Banking">Blood Banking</option>
          <option  className='text-gray-600' value="Radiology Services"> Radiology Services</option>
          <option  className='text-gray-600' value="Inpatient Services">Inpatient/Consultation Services</option>
        </SelectInput>
        <div className='col-span-2 md:col-span-1'>
        <Button text='View More ' variant={'tint'} size={'fill'}>
          {isLoading && <ButtonLoader />}
        </Button>
        </div>
    </form>
    </div>
  )
}
