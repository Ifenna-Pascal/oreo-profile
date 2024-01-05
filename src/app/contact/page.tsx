'use client'
import React, { useState } from 'react'
import { Button, Heading, HeroHeader, Input } from '../components'
import { TextArea } from '../components/input/input'
import { poppins } from '@src/util/font'
import webIcons from '@src/util/icons'
import Link from 'next/link'
import Image from 'next/image'
import { images } from '@src/assets'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { addContact } from '@src/db/method'
import ButtonLoader from '@src/util/loader'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  interface IContact {
    name: string;
    mobile: string;
    message: string;
    email: string;
  }

  const initialContact = {
    name: '',
    mobile: '',
    message: '',
    email: '',
  }

  const contactSchema = yup.object().shape({
    name: yup.string().required('name field is required'),
    mobile: yup.string().required('mobile number field is required'),
    message: yup.string().required('message field is required'),
    email: yup.string().email().required('email field is required'),
  })

  const {
    values,
    errors,
    handleChange,
    resetForm,
    handleBlur,
    touched,
    handleSubmit,
  } = useFormik<IContact>({
    initialValues: initialContact,
    validationSchema: contactSchema,
    onSubmit: () => {
      onSubmit();
    } 
  });

  const onSubmit = async() => {
    try {
      setIsLoading(true);
      console.log(values)
      const result = await addContact(values)
      console.log(result, "res8lt")
      if(result) {
        setIsLoading(false)
        toast.success(`contact saved successfuly`)
      }
      resetForm()
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <div>
        <HeroHeader header1='Jenpeey' header2='Contact Us' image='contact-bg' />  
        <div className='centered-main-container px-5 md:px-0  py-16'>
          <Heading title1='Get Touch' title2='With Us' content='leave us a message...' />
          <div className='grid grid-cols-1 lg:grid-cols-5 mt-8 gap-x-6 justify-between'>
          <div className='md:col-span-3'>
          <p className={`text-[16px] mb-4  pb-3 font-[400] tracking-[0.4px] font-300 text-gray-500  ${poppins.className} `}>Leave us a message</p>
          <form onSubmit={handleSubmit} className='md:grid flex flex-col gap-y-6 grid-cols-1 md:grid-cols-2 md:gap-x-6'>
            <Input  error={errors.name ? errors.name : ''} touched={touched.name} value={values.name} onBlur={handleBlur} onChange={handleChange} name='name' label='Enter Name' className='w-full md:col-span-1 col-span-2' />
            <Input  error={errors.mobile ? errors.mobile : ''} touched={touched.mobile} value={values.mobile} onBlur={handleBlur} onChange={handleChange} name='mobile' label='Enter Phone'  className='w-full md:col-span-1 col-span-2' />
            <div className='col-span-2'>
            <Input  error={errors.email ? errors.email : ''} touched={touched.email} value={values.email} onBlur={handleBlur} onChange={handleChange} name='email' label='Enter Email' type='email'  className='w-full md:col-span-1 col-span-2' />
            </div>
            <div className='col-span-2'>
              <TextArea  error={errors.message ? errors.message : ''} touched={touched.message} value={values.message} onBlur={handleBlur} onChange={handleChange} name='message' label='Your Message' placeholder='Enter Messsage'/>
            </div>
            <Button text='Submit' variant={'tint'} size={'small'} >
              {isLoading && <ButtonLoader />}
            </Button>
          </form>
          </div>
          <div className='col-span-2 flex items-end justify-center'>
              <div className='bg-secondary-200 p-6 flex flex-col w-full mt-8 md:mt-0 md:w-[350px] rounded-md min-h-[400px]'>
                  <h1 className={`text-white ${poppins.className} text-[22px]`}>Quick Contact</h1>
                  <p className={`text-white py-4 ${poppins.className} text-[15px]`}>If you have any questions simply use the following contact details.</p>
                  <div className='py-3 flex'>
                    {webIcons.location}
                    <span className={`text-white w-[220px] ml-3 -mt-1 ${poppins.className} text-[15px]`}>
                      121, Park Drive, Varick Str
                      New York, NY 10012, USA
                    </span>
                  </div>
                  <div className='py-3 flex'>
                    {webIcons.mobile}
                    <span className={`text-white w-[220px] ml-3 -mt-1 ${poppins.className} text-[15px]`}>
                    + (123) 0200 12345,
                    + (123) 0200 12345, 
                    </span>
                  </div>
                  <div className='pt-3 pb-8 flex  border-b  border-white'>
                    {webIcons.mail}
                    <span className={`text-white w-[220px] ml-3 -mt-1 ${poppins.className} text-[15px]`}>
                    Mailus@hospitalteam.com
                    </span>
                  </div>
                  <div className='pt-5 flex gap-x-3 items-center'>
                    <Link href={"#"}>
                      {webIcons.facebook}
                    </Link>
                    <Link href={"#"}>
                      {webIcons.gmail}
                    </Link>
                    <Link href={"#"}>
                      {webIcons.instagram}
                    </Link>
                  </div>
              </div>
          </div>
          </div>
        </div>
        {/* <Image src={images.map} width={100} height={250} alt='map-images' className='w-full object-cover h-[250px]' /> */}
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.309609990898!2d7.5036005750986385!3d6.482417223639182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a31b73460a35%3A0x2175f2e3682c6714!2sJenPeey%20X-Ray%20%26%20Diagnostic%20lab%20Ltd!5e0!3m2!1sen!2sng!4v1704282947079!5m2!1sen!2sng" 
        className='w-full'
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
        <div className='centered-main-container md:px-0 px-5 py-16'>
        <Heading title1='Our' title2='Partners' content='Quick Description text here...' />
        <div className='flex py-4 md:items-center flex-col md:flex-row md:flex-wrap gap-x-6'>
            {
              [images.support1, images.support2, images.support1, images.support2].map((image, index) => (
                <Image src={image.src}  key={index} alt='partners-logo' width={220} height={150} className='w-full md:w-[220px] mb-4 md:mb-0 h-[120px] md:h-[150px]'/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Contact  