import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Header from '../comps/Header';



const Kontakt = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6dkud3q', 'template_nxx1ldf', form.current, '7ROEdI7Zz60mSevmY')
      .then((result) => {
          toast.success('Email sendt! 📧')
      }, (error) => {
          toast.error('Noget gik galt', error.text);
      });
  };

  return (
    <div className="bg-background">
      <Header title="Kontakt" description="Contact Page"/>
      <div className="px-10 sm:px-24">
        <h1 className="py-16 text-4xl text-center sm:py-8 sm:text-6xl font-extralight">Kontakt</h1>

        <div className="grid-cols-3 gap-4 sm:py-8 sm:grid">
          <div className="col-span-2 sm:mr-16">
           
          <form ref={form} onSubmit={sendEmail}>
                <div className="max-w-lg">
            <div className="grid grid-cols-1 gap-6 ">
              <label className="block">
                <span className="text-gray-700">Navn</span>
                <input name="user_name" type="text" className="bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " placeholder=""/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input name="user_email" type="email" className="
                bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " placeholder=""/>
              </label>
              <label className="block">
                <span className="text-gray-700">Emne</span>
                <input type="text" name="subject" className="
                bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " placeholder=""/>
              </label>
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea name="message" className="
                bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " rows="3" placeholder=""></textarea>
              </label>
              <button type="submit" className="flex px-5 py-3 my-6 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 justify-self-center">
          Send besked
        </button>
          </div>
            </div>
            </form>
          </div>
          <div className="h-auto my-8 text-white rounded-md shadow-2xl sm:my-0 bg-default shadow-black">
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl text-center">Kontakt info</h1>
              <p className="mt-10 font-extralight">
              James Ingemann Hunt<br />
Nørretoftevej 20,
3200 Helsinge
<br /><br />
CVR nr.: 37122696<br />
Bankoplysninger: 0400-4031041762<br />
Mobilpay nr.: 42531104
<br /><br />
Email: james@jameshunt.dk <br />
Tel: 42531104
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Kontakt;
