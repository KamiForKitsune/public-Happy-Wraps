import axios from "axios";
import Image from "next/image";
import { FC, useCallback, useState } from "react";

const Contact: FC = () => {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })
    const [inputs, setInputs] = useState({
        person: '',
        email: '',
        message: '',
    })

    const handleOnChange = useCallback((e: { persist: () => void; target: { id: any; value: any; }; }) => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        })
    }, [])

    const handleServerResponse = useCallback((ok: any, msg: any) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            })
            setInputs({
                person: '',
                email: '',
                message: '',
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: msg },
            })
        }
    },[])

    const handleSubmit = useCallback((e: { preventDefault: () => void; })=> {
        e.preventDefault()
        setStatus(prevStatus => ({
            ...prevStatus,
            submitting: true,
        })) 
        axios({
            method: 'POST',
            url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
            data: inputs
        }).then((_response => {
                handleServerResponse(true,
     'Gracias por contactarnos, nos pondremos en contacto contigo pronto.'
            )
            })
    ).catch(error =>
        handleServerResponse(true,
            error
                   ) )},
        [ inputs, handleServerResponse]
    )

    return (
        <div className="bg-quinaryHW text-white flex flex-col justify-center min-h-screen">
            <div className="flex-1 flex flex-col justify-center pt-10 lg:pt-6" >
                <div className="pb-10 flex justify-center">
                    <Image src="/assets/company-icon/icons8-box-256.png" alt='happy-wraps' width={60}
                        height={60} />
                </div>
                <h2 className="text-4xl font-bold text-center"> Contactanos </h2>
                <form onSubmit={handleSubmit} className="flex items-center flex-col justify-center gap-4  px-10 mt-16 lg:mt-20 min-w-full lg:min-w-[500px] ">
                    { status.info.error && (
                    <div className="bg-red-100 border border-red text-red-700 px-4 py-3 rounded relative" role='alert'> <strong className="font-bold">Error</strong> : { ' ' }
                        <span className="block sm:inline"> {status.info.msg}</span>
                    </div>)}
                    {status.submitted ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role='alert'> <strong className="font-bold">Gracias!</strong> : { ' ' }
                            <span className="block sm:inline"> {status.info.msg}</span>
                        </div>
                    ) : (
                        <>
                        <input id='person'
                            onChange={handleOnChange}
                            value={inputs.person}
                            name='personName'
                            required maxLength={120}
                            type='text'
                            placeholder="Tu nombre"
                            className='bg-white  text-textGrey outline-none border-2 border-white rounded-3xl px-8 py-2 max-w-2xl lg:w-96' />
                        <input id='email'
                            onChange={handleOnChange}
                            value={inputs.email}
                            name='email'
                            required maxLength={128}
                            type='email'
                            placeholder="Tu email"
                            className='bg-white  text-textGrey outline-none border-2 border-white rounded-3xl px-8 py-2 max-w-2xl lg:w-96' />
                        <textarea id='message'
                            onChange={handleOnChange}
                            value={inputs.message}
                            name='message'
                            required maxLength={1048576}
                            placeholder="Escribe tu mensaje!"
                            className='bg-black text-textGrey outline-none border-2 border-white rounded-3xl px-12 py-6 min-h-[16em] lg:w-96' />
                        <div className="mt-10 flex justify-center">
                            <button type='submit' className='bg-secondaryHW text-white rounded-3xl px-8 py-2'> 
                             {!status.submitting ? !status.submitted ? 'Contactar' : 'Enviado' : 'Enviando...'}
                             </button>
                        </div>
                        </>
                        )}
                    
                </form>
            </div>
        </div>
    )
}

export default Contact; 