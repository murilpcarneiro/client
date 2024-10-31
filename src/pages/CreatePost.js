import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  let history = useNavigate();

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Titulo Obrigatório"),
    postText: Yup.string().required("Post Obrigatório"),
    username: Yup.string().min(3).max(15).required("Nome de Usuário Obrigatório"),
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      history("/");
    });
  };


  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='form'>
          <label className='label'>Title: </label>
          <ErrorMessage name='title' component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="title" placeholder="Ex. Title..." />
          <label className='label'>Post: </label>
          <ErrorMessage name='postText' component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="postText" placeholder="Ex. Post..." />
          <label className='label'>Username: </label>
          <ErrorMessage name='username' component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="username" placeholder="Ex. John123..." />

          <button type='submit' id='buttonCreate'>Criar Um Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
