import React, { useState } from 'react'
import PageDefault from './../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from './../../../components/FormFields'

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais);



    function setValue(key, val) {
        setValues({
            ...values,
            [key]: val, // nome: 'valor'
        })
    }

    function handleChange(props) {
        setValue(
            props.target.getAttribute('name'),
            props.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])
                setValues(valoresIniciais)
            }}>
                
                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />


                <FormField 
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                

                <button>Cadastrar</button>

                <ul>
                    {categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria.nome}
                            </li>)
                    })}
                </ul>

            </form>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;