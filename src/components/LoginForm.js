import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Form.css'

const LoginForm = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('Login form submitted:', data);
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            {...register('email')}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            {...register('password')}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>Don't have an account? <Link to="/" className="link">Create here</Link></p>
      </Form>
    </Container>
  );
};

export default LoginForm;
