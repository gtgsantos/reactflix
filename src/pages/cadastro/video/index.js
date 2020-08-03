import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFields';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const valoresIniciais = {
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=ON7kl-2n4Fk',
    categoria: 'Front End',
  };

  const history = useHistory();
  const { handleChange, values } = useForm(valoresIniciais);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        history.push('/');
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
