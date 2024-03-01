'use client'

import React, { useEffect } from 'react'
import '../globals.css'

function page() {
  return (
    <main className='page'>
        <h2 className='title-registration'>SCARICO RESPONSABILITA</h2>
        <UserInformationsForm/>
        <div className='container-regolamento'>
            <TermsAndConditions/>
            <Vietato/>
            <DirittiDelVenditore/>
        </div>
    </main>
  )
}

export default page



const TermsAndConditions = () => {
    const conditions = [
      "di assumersi la responsabilità di eventuali danni ai veicoli in uso causati da guida scorretta o pericolosa",
      "di assumersi la responsabilità dei danni causati a persone o cose di terzi o della Suta & Supra S.r.I.s. per inosservanza dei regolamenti o delle disposizioni o per comportamento di guida scorretto o pericoloso",
      "di aver letto e ricevuto copia del regolamento della Suta & Supra S.r.I.s e di impegnarsi a rispettare le condizioni in esso contenute:",
      "L’accesso alla zona box è consentito solo ai piloti regolarmente registrati per la sessione in corso;",
      "Durante la guida è obbligatorio indossare abbigliamento idoneo ed un casco integrale regolarmente allacciato con visiera abbassata; se viene utilizzato un casco della Suta & Supra S.r.I.s è obbligatorio indossare un sottocasco monouso (verrà consegnato all’inizio della sessione);",
      "Il pilota non deve avere indosso oggetti che possano causare od aggravare un sinistro o essere danneggiati nel corso dell’attività (orologi, sciarpe, telefoni, chiavi, anelli e simili); vi sono cassette con chiave nella zona box.",
      "di impegnarsi a mantenere una condotta tale da favorire l’ordine, la sicurezza e lo spirito sportivo sia durante la corsa che durante tutta la propria permanenza nei locali della Suta & Supra S.r.I.s",
      "di avere esperienza nella guida di veicoli a motore e di trovarsi nelle condizioni psicofisiche idonee alla guida degli stessi",
      "di essere a conoscenza dell’attività sportivo-ricreativa alla quale parteciperà, cosciente che la stessa comporta il rischio di incidenti anche con lesioni personali e che il mancato scrupoloso rispetto del regolamento e delle disposizioni accresce il rischio di lesioni personali e danni a terzi",
      "che in caso di inosservanza dei regolamenti o delle disposizioni o per comportamento di guida scorretto, causasse danni a persone o cose di terzi o della Suta & Supra S.r.I.s sarà responsabile di tali danni e la Suta & Supra S.r.I.s avrà diritto di non consentirne l’accesso ai propri locali"

    ];
  
    return (
      <div>
        <h2>DICHIARA</h2>
        <ul>
          {conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
    );
};
const Vietato = () => {
const conditions = [
    "scendere dai veicoli lungo la pista; aspettare che intervenga il personale in ogni caso di testa coda, incidente,malfunzionamento o simili",
    "sostare lungo la pista; in caso di necessità rientrare ai box",
    "spostare i veicoli usando le mani o le gambe",
    "guidare i veicoli sotto l’effetto di alcool o di altre droghe",
    "tamponare o urtare altri piloti ed i mezzi di sicurezza e contenimento posti a bordo pista",
    "Il pilota non deve avere indosso oggetti che possano causare od aggravare un sinistro o essere danneggiati nel corso dell’attività (orologi, sciarpe, telefoni, chiavi, anelli e simili); vi sono cassette con chiave nella zona box."
];

return (
    <div>
    <h2>E VIETATO</h2>
    <ul>
        {conditions.map((condition, index) => (
        <li key={index}>{condition}</li>
        ))}
    </ul>
    </div>
);
};
const DirittiDelVenditore = () => {
    const conditions = [
        "si riserva il diritto di non consentire l’accesso alla pista alle persone ritenute non idonee e di squalificare il pilota che non rispetti scrupolosamente i regolamenti e le disposizioni del personale",
        "non risponderà di alcun danno subito dal firmatario o da terzi, sia nel caso di incidenti fortuiti che nel caso di incidenti derivanti dall’inosservanza dei regolamenti o disposizioni o comunque per comportamento di guida scorretto o pericoloso.",
        
    ];
    
    return (
        <div>
        <h2>SUTA E SUPRA S.R.L</h2>
        <ul>
            {conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
            ))}
        </ul>
        </div>
    );
};




function UserInformationsForm(){
    const [modalMinor, setModalMinor] = React.useState(false)
    const [dateBirth, setDateBirth] = React.useState('')



    function handleDateBirth(event: any){
        const date = new Date(event.target.value)
        
        const UNIX18Years = 567993600000
        const now = new Date().getTime()

        if (date.getTime() > (now - UNIX18Years)){
            setModalMinor(true)
            return
        }
        
        
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        setDateBirth(`${day}/${month}/${year}`)
    }
    function sendForm(){
        const nome = document.querySelector('.namev')
        const cognome = document.querySelector('.cognomev')
        const nickname = document.querySelector('.nicknamev')
        const lnascita = document.querySelector('.lnascitav')
        const tdocumento = document.querySelector('.tdocumentov')
        const ndocumento = document.querySelector('.ndocumentov')

        const indirizzo = document.querySelector('.indirizzov')
        const comune = document.querySelector('.comunev')
        const provincia = document.querySelector('.provinciav')
        const cap = document.querySelector('.capv')
        const paese = document.querySelector('.paesev')

        const telefono = document.querySelector('.telefonov')
        const email = document.querySelector('.emailv')

        if (!indirizzo || !comune || !provincia || !cap || !paese || !telefono || !email || !nome || !cognome || !lnascita  || !ndocumento) return

        if ((indirizzo as HTMLInputElement).value === '' || (comune as HTMLInputElement).value === '' || (provincia as HTMLInputElement).value === '' || (cap as HTMLInputElement).value === '' || (paese as HTMLInputElement).value === '' || (telefono as HTMLInputElement).value === '' || (email as HTMLInputElement).value === '' || (nome as HTMLInputElement).value === '' || (cognome as HTMLInputElement).value === '' || (lnascita as HTMLInputElement).value === '' ||  (ndocumento as HTMLInputElement).value === ''){
            alert('Compila tutti i campi')
            return
        }

        const data = 
        {
                nome: (nome as HTMLInputElement).value,
                cognome: (cognome as HTMLInputElement).value,
                nickname: (nickname as HTMLInputElement).value,
                lnascita: (lnascita as HTMLInputElement).value,
                ndocumento: (ndocumento as HTMLInputElement).value,
                indirizzo: (indirizzo as HTMLInputElement).value,
                comune: (comune as HTMLInputElement).value,
                provincia: (provincia as HTMLInputElement).value,
                cap: (cap as HTMLInputElement).value,
                paese: (paese as HTMLInputElement).value,
                telefono: (telefono as HTMLInputElement).value,
                email: (email as HTMLInputElement).value,
        }




        /* /* console.log(data) */


        const checkBox = document.querySelector('.input-accept-terms')

    

        if (checkBox && !(checkBox as HTMLInputElement).checked){
            alert('Devi accettare i termini e le condizioni')
            return
        }

        fetch('https://kart-api.vercel.app/create/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             nome: data.nome,
             cognome: data.cognome,
             nickname: data.nickname,
             nato_a: data.lnascita,
             residente_a: data.comune,
             cap: data.cap,
             provincia: data.provincia,
             nazione: data.paese,
             via:  data.indirizzo,
             data_nascita: dateBirth,
             telefono: data.telefono,
             email: data.email,
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error){
                return alert(data.error)
            } if (data.message){
                alert(data.message)
            }
                

        })

        
        //window.location.href = '/'

    }
   


    return(
        <div>
            <form className='form-registration' action="">

                <div>
                    <h4>Generalita</h4>
                    <div className='container-personal-info'>
                        <div className='input-component'>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className='namev' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Cognome</label>
                            <input type="text" className='cognomev' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Nickname</label>
                            <input type="text" className='nicknamev' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Luogo di nascita</label>
                            <input type="text" className='lnascitav' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Data di nascita</label>
                            <input type="date" onChange={(e)=>{handleDateBirth(e)}} className='dnascitav' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Tipo Documento</label>
                            <select name="" className='tdocumentov' id="">
                                <option value="1">C. di Identita</option>
                                <option value="2">Passaporto</option>
                                <option value="3">Patente di guida</option>
                            </select>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">N. Documento</label>
                            <input type="text" className='ndocumentov' name="nome" id="nome"/>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Residenza o Domicilio</h4>
                    <div className='container-personal-info'>
                        <div className='input-component'>
                            <label htmlFor="nome">Indirizzo</label>
                            <input type="text" className='indirizzov' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Comune</label>
                            <input type="text" className='comunev' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Provincia</label>
                            <input type="text" className='provinciav' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">C.A.P</label>
                            <input type="number" className='capv' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Nazione</label>
                            <input type="text" className='paesev' name="nome" id="nome"/>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Informazioni di contatto</h4>
                    <div className='container-personal-info'>
                        <div className='input-component'>
                            <label htmlFor="nome">Telefono</label>
                            <input type="number" className='telefonov' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Email</label>
                            <input type="email" className='emailv' name="nome" id="nome"/>
                        </div>
                    </div>
                </div>

                
            </form>

            {
                modalMinor && 
                <>
                    <h2 style={{textAlign:"center"}}>Informazioni Responsabile Legale</h2>
            <form className='form-registration' style={{marginTop: '20px'}}>
            <div>
                    <h4>Generalita</h4>
                    <div className='container-personal-info'>
                        <div className='input-component'>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className='namev' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Cognome</label>
                            <input type="text" className='cognomev' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Luogo di nascita</label>
                            <input type="text" className='lnascitav' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Data di nascita</label>
                            <input type="date" onChange={(e)=>{handleDateBirth(e)}} className='dnascitav' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">N. Documento</label>
                            <input type="text" className='ndocumentov' name="nome" id="nome"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Residenza o Domicilio</h4>
                    <div className='container-personal-info'>
                        <div className='input-component'>
                            <label htmlFor="nome">Indirizzo</label>
                            <input type="text" className='indirizzov' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Comune</label>
                            <input type="text" className='comunev' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Provincia</label>
                            <input type="text" className='provinciav' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">C.A.P</label>
                            <input type="number" className='capv' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Paese</label>
                            <input type="text" className='paesev' name="nome" id="nome"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Contatti</h4>
                    <div className='container-personal-info'>
                        <div className='input-component'>
                            <label htmlFor="nome">Telefono</label>
                            <input type="number" className='telefonov' name="nome" id="nome"/>
                        </div>
                        <div className='input-component'>
                            <label htmlFor="nome">Email</label>
                            <input type="email" className='emailv' name="nome" id="nome"/>
                        </div>
                    </div>
                </div>
                
            </form>
                </>
            }

            

            <div className='container-confirm-reg'>
                <div className='accept-terms'> 
                    <input className='input-accept-terms' type="checkbox" />
                    Dichiaro di accettare i termini e condizioni sotto riportati
                </div>
                <div onClick={sendForm} className='register-button'> Registrati</div>
            </div>
        </div>

    )
}