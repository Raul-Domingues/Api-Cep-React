import React, { useState } from 'react';
import './personal-info.css';

export const PersonalInfo = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        celular: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    

    const validate =() => {
        const newErrors = {};
        if(!formData.email) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if(!FormData.celular) {
            newErrors.celular = 'Celular é obrigatório';
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0) {
            console.log('Formulário enviado com sucesso!', formData)
        }
    }

    return (
       <section className="step1 step">
            <section className="step-display">
                <ul className="step-list">
                    <li>
                        <span className="current-step">1</span>
                        <div className="step-name">
                            <p className="step-num">Passo 1</p>
                            <p>Suas Informações</p>
                        </div>
                    </li>
                    <li>
                        <span>2</span>
                        <div className="step-name">
                            <p className="step-num">Passo 2</p>
                            <p>Seu endereço</p>
                        </div>
                    </li>
                    <li>
                        <span>3</span>
                        <div className="step-name">
                            <p className="step-num">Passo 3</p>
                            <p>Selecione um plano</p>
                        </div>
                    </li>
                    <li>
                        <span>4</span>
                        <div className="step-name">
                            <p className="step-num">Passo 4</p>
                            <p>Resumo</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="step-form-section">
                <h1 className="step-heading">
                    Informações pessoais
                </h1>
                <p className="description">
                    Forneça seu nome, endereço de e-mail e número de celular.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="input-area">
                        <div className="label-area">
                            <p className="label">Nome</p>
                        </div>
                        <input 
                            type="text"
                            placeholder="Ex. Raul Domingues"
                            id="nome"
                            name='nome'
                            value={formData.nome}
                            onChange={handleChange}
                        />
                        {errors.nome && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>
                    <div className="input-area">
                        <div className="label-area">
                            <p className="label">Email</p>
                        </div>
                        <input 
                            type="email"
                            placeholder="Ex. exemplo@gmail.com"
                            id="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>
                    <div className="input-area">
                        <div className="label-area">
                            <p className="label">Celular</p>
                        </div>
                        <input 
                            type="text"
                            placeholder="Ex. (44) 99999-9999"
                            id="celular"
                            name='celular'
                            value={formData.celular}
                            onChange={handleChange}
                        />
                    </div>

                    <section className='step-button-area step-1-button-area'>
                        <button type="submit" className='next-step-btn step-1-btn'>
                            Próximo passo
                        </button>
                    </section>
                </form>
            </section>
       </section>
    )
}